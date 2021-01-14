let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

module.exports = () => ctx => {

  return layout('Edit New Article', [
    tags.div({ id: 'chessed' }),
  ], {
    chessmd: true,
    moreJs: tags.frag([
      helper.editorTag(),
      helper.embedJsUnsafeLoadThen(`
ChessIsEditor.boot(${helper.safeJsonValue({
})})`)(ctx)
    ]),
    moreCss: tags.frag([
      helper.cssTag('editor'),
      helper.cssTag('editor_main')
    ])
  }, ctx);
};
