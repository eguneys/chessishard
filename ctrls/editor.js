let { bookm } = require('../model');
let html = require('../html');

let cis = require('./cis');


function Editor(env) {

  this.index = async function(req, res, next) {

    let ctx = await cis.reqToCtx(req);

    res.send(html.editor()(ctx));
  };

}

module.exports = env => new Editor(env);
