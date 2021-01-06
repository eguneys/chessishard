let html = require('../html');

let openingsApi = require('../modules/openings');

let { openingm } = require('../model');

let cis = require('./cis');

function Opening(env) {

  this.index = async (req, res, next) => {
    
    let ctx = await cis.reqToCtx(req);

    let sections = await openingm.sectionsLight();

    res.send(html.openings.list(sections)(ctx));

  };

  this.section = async (req, res, next) => {

    let ctx = await cis.reqToCtx(req);

    let { sectionId } = req.params;
    
    let section = await openingm.sectionById(sectionId);

    res.send(html.openings.show(section)(ctx));
  };

  this.sectionEdit = async (req, res, next) => {

    let ctx = await cis.reqToCtx(req);
    
    let { sectionId } = req.params;
    
    let section = await openingm.sectionById(sectionId);


    res.send(html.openings.editor(section)(ctx));
  };


  this.sectionEditPost = async(req, res, next) => {

    let { sectionId } = req.params;
    let { content } = req.body;

    if (!content) {
      res.send({error: 'empty body'});
      return;
    }

    if (content.length > 3000) {
      res.send({ error: 'Max length: 3000' });
    }

    openingm
      .update(sectionId, { content })
      .then(_ => {
        res.send({ ok: true, redirect: `/openings/${sectionId}` });
      });
    
  };

  this.newSection = async (req, res, next) => {

    let err = openingsApi.validate(req.body);

    if (err) {
      res.send({ error: err });
    } else {
      let { name, handle } = req.body;
      let _ = await openingm.insertSection(name, handle);
      res.send(_);
    }

  };

}

module.exports = (env) => {
  return new Opening(env);
};
