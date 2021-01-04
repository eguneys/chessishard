let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');


module.exports = (section, explanation) => ctx => {
  let data = explanation.content;

  return layout('Free Chess Articles', [
    tags.div({ cls: ['home'] }, [
      tags.a({ href: `/practice#${section.id}` }, '- Back to Practice'),
      tags.h1(section.name),
      tags.div({id: 'md' }),
      tags.a({ href: `/practice#${section.id}` }, '- Back to Practice'),
    ])  
  ], {
    moreJs: tags.frag([
      helper.sectionTag(),
      helper.embedJsUnsafeLoadThen(`
ChessIsSection.boot(${helper.safeJsonValue({
data
})})`)
    ]),
    chessmd: true,
    moreCss: helper.cssTag('section'),
    openGraph: openGraph({
      title: "Free chess articles",
      description: trans.siteDescription,
      url: e.env.domain,
      image: helper.assetUrl("images/Chessishard.png")
    })
  });
};

module.exports.notFound = (section) => ctx => {
    return layout('Free Chess Articles', [
      tags.p(`No explanation found for this section. Please check back later.`),
      tags.a({ href: '/practice' }, '- Back to Practice'),
    ], {
    });
};
