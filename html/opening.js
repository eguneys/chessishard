let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

let bits = {};

bits.section = (section) => tags.li([
  tags.a({ href: `/opening/${section.id}` },
         section.name)
]);

module.exports.list = (sections) => layout('Opening Repertoire', [
  tags.h2('Opening Repertoire'),
  tags.ul({ cls: 'openings list' }, 
          sections.map(bits.section))
], {

});


module.exports.show = (section) => {

  let data = section.content;

  return layout(section.name, [
    tags.h1(section.name),
    tags.div({ id: 'md' })
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
  });
};

module.exports.editor = (section) => {

  let data = section.content;

  return layout(section.name, [
    tags.div({ id: 'chessed' })
  ], {
    buttons: tags.frag([
      tags.div([
        tags.a({ href:`/opening/${section.id}`, id: 'save', cls: 'link' }, [
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
})})`)
    ]),
    moreCss: tags.frag([
      helper.cssTag('editor'),
      helper.cssTag('editor_main')
    ])
  });
};
