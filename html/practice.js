let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');

let bits = {};

bits.chapter = (sectionsWithMeta, exercisesWithMeta) => {
  return (chapterWithMeta) => {

    let { chapter, meta } = chapterWithMeta;

    let csections = sectionsWithMeta.filter(_ => _.section.chapterId === chapter.id);

    return tags.li([
      tags.div({ cls: 'chead' }, [
        tags.h2(`${chapter.chapter}. ${chapter.name}`),
        tags.span({}, [`${meta.done}/${meta.total}`])
      ]),
      tags.ul(
        csections.map(bits.section(exercisesWithMeta))
      )
    ]);
  };
};

bits.section = exercisesWithMeta => {
  return (sectionWithMeta) => {

    let { section, meta } = sectionWithMeta;

    let cexercises = exercisesWithMeta.filter(_ => _.exercise.sectionId === section.id);

    return tags.li([
      tags.div({ cls: 'shead' }, [
        tags.h3(tags.a({ href: `/section/${section.id}`, name: section.id }, `${section.name}`)),
        tags.span({}, [`${meta.done}/${meta.total}`]),
      ]),
      tags.ul(
        cexercises.map(bits.exercise)
      )
    ]);    
  };
};

bits.exercise = (exerciseWithMeta) => {
  let { exercise, meta } = exerciseWithMeta;

  let markKlass = meta.done ? 'done' : '';

  return tags.li({ cls: 'exercise' }, [
    tags.a({ target: '_blank', href: `/challenge/${exercise.id}` }, [`${exercise.fen} 🔗`]),
    tags.span({ cls: 'mark ' + markKlass }, '✓')
  ]);
};

bits.progress = (ctx, progress) => {
  if (!ctx.user) {
    return tags.p([`To auto-challenge Stockfish and save your progress `,
                   tags.a({ href: '/auth' }, [`Login with Lichess`])
                  ]);
  } else {
    return tags.p({ class: 'progress' }, [`${progress.done}/${progress.total}`]);
  }
};

bits.info = (ctx) => {

  let explanationInfo = tags.frag([
    tags.p(`Click on sections to open explanations. You can click on notation to see the position on board.`)
  ]);

  if (!ctx.user) {
    return tags.div([
      tags.p(`Select a position to open the analysis board on Lichess.`),
      explanationInfo
    ]);
  }

  return tags.div([
    tags.p(`Hello ${ctx.user.id}`),
    tags.p('Select a position to play.'),
    tags.p('You will challenge from the position, to Stockfish Level 8 on Lichess.'),
    tags.p('You have to win or make a draw with current color to succeed.'),
    tags.p(`If you can't succeed on the first try, you can rematch the AI and try again.`),
    tags.p(`You might have to abort the opposite color and rematch again to try with the required color.`),
    tags.p(`After you succeed your progress will be saved on this page. (Unfortunately you have to reload this page to see changes.) `),
    explanationInfo
  ]);

};

module.exports = (chaptersWithMeta, sectionsWithMeta, exercisesWithMeta, progress) => ctx => 
layout('Free Chess Articles', [
  bits.info(ctx),
  bits.progress(ctx, progress),
  tags.div({ cls: ['home'] }, [
    tags.div([
      tags.ul(chaptersWithMeta.map(bits.chapter(sectionsWithMeta, exercisesWithMeta)))
    ])
  ])  
], {
  moreCss: helper.cssTag('practice'),
  openGraph: openGraph({
    title: "Free chess articles",
    description: trans.siteDescription,
    url: e.env.domain,
    image: helper.assetUrl("images/Chessishard.png")
  })
}, ctx);
