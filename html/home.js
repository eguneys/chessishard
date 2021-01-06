let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');

module.exports = () => ctx => layout('Free Chess Articles', [
  tags.div({ cls: ['home'] }, [
    tags.p('Read about technique and theory, solve exercises, track your progress'),
    tags.a({ href: '/practice', cls: 'button' }, `Dvoretsky's Endgame Manual`),
    tags.a({ href: '/openings', cls: 'button' }, `Openings`)
  ])
], {
  openGraph: openGraph({
    title: "Free chess articles",
    description: trans.siteDescription,
    url: e.env.domain,
    image: helper.assetUrl("images/Chessishard.png")
  })
}, ctx);

function article(article) {
  return tags.li([tags.a({ href: '/' + article.id }, [article.title]), 
                  tags.date([helper.date(article.updatedAt)])]);
}
