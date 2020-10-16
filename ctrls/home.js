let html = require('../html');

module.exports = function(req, res) {

  let articles = [{
    title: 'French Defense Advanced',
    date: 'September 2020',
    id: '12345678'
  },{
    title: 'Old Benoni Reversed',
    date: 'September 2020',
    id: '12345678'
  }, {
    title: 'English Defense Reversed',
    date: 'September 2020',
    id: '12345678'
  },{
    title: 'Sicilian Defense',
    date: 'September 2020',
    id: '12345678'
  }];

  res.send(html.home(articles));
};
