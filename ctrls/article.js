let html = require('../html');

module.exports = function(req, res) {

  let article = {
    title: 'English Defense Reversed',
    date: 'September 2020',
    gameid: 'tBBd0Uws',
    time: '30+0',
    rated: true,
    white: 'heroku',
    black: 'learningabc',
    id: '3',
    content: `

# Classical Old Benoni

<1. d4 c5 2. e3 d5 3. Nf3 Nf6> Engine suggestion is 2. d5

# Avoid Isolated Pawn

<4. c4 cxd4> Engine says it's ok

# Preserve Initiative

I exchange queens and develop

=8

Full game reference: 
`
  };

  res.send(html.article(article));
};
