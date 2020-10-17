let { extend } = require('./util');
let game = require('./game');

let tags = require('../tags');

let helper = {};

extend(helper, game);

let assetBaseUrl = '';

function assetUrl(path) {
  return `${assetBaseUrl}/assets/${path}`;
}

function cssAt(path) {
  return tags.link(assetUrl(path));
}

function jsAt(path) {
  return tags.script(true, assetUrl(path));
}

function jsModule(name) {
  return jsAt(`compiled/${name}.js`);
}

helper.cssTag = name => cssAt(`css/${name}.css`);

helper.jsModule = jsModule;
helper.reviewTag = jsModule('review');
helper.editorTag = jsModule('editor');
helper.articleTag = jsModule('article');
helper.chessmdTag = jsAt('javascripts/vendor/bundle.js');

helper.embedJsUnsafe = (js) => {
  return `<script>${js}</script>`;
};

helper.embedJsUnsafeLoadThen = (js) => {
  return helper.embedJsUnsafe(`cishard.load.then(()=>{${js}})`);
};

helper.safeJsonValue = _ => JSON.stringify(_);

module.exports = helper;