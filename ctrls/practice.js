let liapi = require('../liapi');
let { bookm, progressm } = require('../model');
let html = require('../html');

let cis = require('./cis');


function Practice(env) {

  this.challenge = async (req, res, next) => {
    let ctx = await cis.reqToCtx(req);

    let { exerciseId } = req.params;

    let exercise = await bookm.exerciseById(exerciseId);

    if (ctx.user) {

      const onProgress = () => {
        progressm.insert(ctx.user.id, 
                         exercise.id);
      };

      let game = await liapi.aiFen(ctx.user.token, exercise);

      liapi.listenFen(ctx.user.token, exercise, onProgress);

      res.redirect(`https://lichess.org/${game.id}`);

    } else {
      let efenslug = exercise.fen.replace(' ', '_');
      res.redirect(`https://lichess.org/editor/${efenslug}`);
    }
  };

  this.section = async (req, res, next) => {
    let ctx = await cis.reqToCtx(req);

    let { sectionId } = req.params;

    let section = await bookm.sectionById(sectionId);
    let explanation = await bookm.explanationBySectionId(sectionId);

    if (!explanation) {
      res.send(html.section.notFound(section)(ctx));
    }

    res.send(html.section(section, explanation)(ctx));    
  };

  this.index = async (req, res, next) => {

    let ctx = await cis.reqToCtx(req);

    let chapters = await bookm.chapters();

    let sections = await Promise.all(
      chapters.map(chapter => 
        bookm.sectionsByChapter(chapter.id)
      )
    ).then(_ => _.flat());

    let exercises = await Promise.all(
      sections.map(section =>
        bookm.exercisesBySection(section.id))
    ).then(_ => _.flat());

    let _progress = [];

    if (ctx.user) {
      _progress = await progressm.byUser(ctx.user.id);
    }

    let exercisesWithMeta = exercises.map(exercise => {
      return { exercise, meta: {
        done: _progress
          .filter(_ => _.exerciseId === exercise.id).length > 0 }
             };
    });

    let sectionsWithMeta = sections.map(section => {
      let total = exercisesWithMeta.filter(_ => _.exercise.sectionId === section.id);

      return { section, meta: {
        total: total.length,
        done: total.filter(_ => _.meta.done).length
      } };
    });

    let chaptersWithMeta = chapters.map(chapter => {
      let total = sectionsWithMeta.filter(_ => _.section.chapterId === chapter.id);

      return { chapter, meta: {
        total: total
          .reduce((acc, _) => acc + _.meta.total, 0),
        done: total.filter(_ => _.meta.done)
          .reduce((acc, _) => acc + _.meta.done, 0)
      } };
    });

    let progress = {
      total: exercises.length,
      done: exercisesWithMeta.filter(_ => _.meta.done).length
    };

    res.send(html.practice(chaptersWithMeta, sectionsWithMeta, exercisesWithMeta, progress)(ctx));
  };

};

module.exports = env => new Practice(env);
