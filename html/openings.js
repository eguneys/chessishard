let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

let bits = {};

bits.info = () => {
  return tags.div([
    tags.p(`This is opening repertoire.`),
    tags.p(`Click on a link to see the lines.`),
    tags.p([
      `Practice the opening with our Lichess BOT `,
      tags.a({ href: 'https://lichess.org/@/openingsexercise' }, 'openingsexercise'),
      `.`]),
    tags.p(`Copy an opening handle and paste it in the game's chat to select that opening.`),
    tags.p(`Handle will be copied on click.`)
  ]);
};

bits.section = (section) => tags.li([
  tags.a({ href: `/openings/${section.id}` },
         section.name),
  tags.span(' Challenge #'),
  tags.a({ href: '#', cls: 'handle', 'data-handle': section.handle }, section.handle)
]);

module.exports.list = (sections) => ctx => layout('Opening Repertoire', [
  bits.info(),
  tags.ul({ cls: 'openings list' }, 
          sections.map(bits.section))
], {
    moreJs: tags.frag([
      helper.openingsTag(),
      helper.embedJsUnsafeLoadThen(`
ChessIsOpenings.boot(${helper.safeJsonValue({
})})`)(ctx)
    ])
}, ctx);


module.exports.show = (section) => ctx => {

  let data = section.content;

  return layout(section.name, tags.frag([
    tags.a({ href: `/openings#${section.id}` }, '- Back to Opening List'),
    tags.section([
      tags.h1([section.name,
               tags.span(' Challenge #'),
               tags.a({ href: '#', cls: 'handle', 'data-handle': section.handle }, section.handle),
              ]),
      tags.div({ id: 'md' })
    ]),
    tags.a({ href: `/openings#${section.id}` }, '- Back to Opening List'),
  ]), {
    moreJs: tags.frag([
      helper.sectionTag(),
      helper.embedJsUnsafeLoadThen(`
ChessIsSection.boot(${helper.safeJsonValue({
data
})})`)(ctx)
    ]),
    chessmd: true,
    moreCss: helper.cssTag('section'),
  }, ctx);
};

module.exports.editor = (section) => ctx => {

  let data = section.content;

  return layout(section.name, [
    tags.div({ id: 'chessed' })
  ], {
    buttons: tags.frag([
      tags.div([
        tags.a({ href:`/openings/${section.id}`, id: 'save', cls: 'link' }, [
          'Save'
        ])        
      ]),
    ]),
    chessmd: true,
    moreJs: tags.frag([
      helper.editorTag(),
      helper.embedJsUnsafeLoadThen(`
ChessIsEditor.boot(${helper.safeJsonValue({
data
})})`)(ctx)
    ]),
    moreCss: tags.frag([
      helper.cssTag('editor'),
      helper.cssTag('editor_main')
    ])
  }, ctx);
};
