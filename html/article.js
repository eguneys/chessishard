let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

module.exports = (article) => {

  let data = article.content;

  return layout(article.title, [
    tags.section([
      tags.a({ href: '#' }, [
        tags.h1([article.title])
      ]),
      ainfo(article),
      tags.div({ id: 'chessmd' }),
      tags.a({ href: ligame(article.gameid) }, [
        tags.img(ligif(article.gameid))
      ])
    ])
  ], {
    chessmd: true,
    moreJs: tags.frag([
      helper.articleTag,
      helper.embedJsUnsafeLoadThen(`
ChessIsArticle.boot(${helper.safeJsonValue({
data
})})`)
    ]),
    moreCss: helper.cssTag('article')
  });
};

function ainfo(article) {
  return tags.div({ cls: ['info'] }, [
    tags.date([article.date]),
    ` • ${article.time} • ${article.rated?'Rated':'Casual'} • `,
    tags.a({ href: liuser(article.white) }, [article.white]),
    ' vs ',
    tags.a({ href: liuser(article.black) }, [article.black]),
  ]);
}

function liuser(user) {
  return 'https://lichess.org/@/' + user;
}

function ligame(game) {
  return `https://lichess.org/${game}`;
}

function ligif(game) {
  return `https://lichess1.org/game/export/gif/${game}.gif`;
}
