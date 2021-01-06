let { articlem } = require('../model');
let html = require('../html');

let cis = require('./cis');

function Home(env) {

  this.index = async (req, res, next) => {
    let ctx = await cis.reqToCtx(req);

    res.send(html.home()(ctx));
  };

};

module.exports = env => {
  return new Home(env);
};
