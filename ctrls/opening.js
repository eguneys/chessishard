let html = require('../html');

let { openingm } = require('../model');

function Opening(env) {

  this.index = async (req, res, next) => {
    
    let sections = await openingm.sectionsLight();

    res.send(html.opening.list(sections));

  };

  this.section = async (req, res, next) => {

    let { sectionId } = req.params;
    
    let section = await openingm.sectionById(sectionId);

    res.send(html.opening.show(section));    
  };

  this.sectionEdit = async (req, res, next) => {
    
    let { sectionId } = req.params;
    
    let section = await openingm.sectionById(sectionId);


    res.send(html.opening.editor(section));
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
        res.send({ ok: true, redirect: `/opening/${sectionId}` });
      });
    
  };

  this.newSection = async (req, res, next) => {

    let sname = req.body.name;

    openingm.insertSection(sname)
      .then(_ => {
        res.send(_);
      });

  };

}

module.exports = (env) => {
  return new Opening(env);
};
