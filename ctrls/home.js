let { articlem } = require('../model');
let html = require('../html');

module.exports = function(req, res, next) {
  articlem.list().then(v_ => 
    v_.fold(articles =>
      res.send(html.home(articles)),
      next)
  );
};
