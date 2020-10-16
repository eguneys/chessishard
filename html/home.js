let { layout } = require('./base');
let tags = require('./tags');

module.exports = (articles) => layout('Free Chess Articles', [
  tags.div({ cls: ['home'] }, [
    tags.div({ cls: ['start'] }, [
      tags.a({ href: '/new', cls: ['button'] }, ['New article'])
    ]),
    tags.div([
      tags.ul(articles.map(article))
    ])
  ])
], {});

function article(article) {
  return tags.li([tags.a({ href: '/' + article.id }, [article.title]), 
                  tags.date([article.date])]);
}
