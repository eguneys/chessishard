let e = require('./env');
let tags = require('../tags');

let ContentSecurityPolicy = require('../../modules/csp');

let assetDomain = () => e.env.assetDomain;
let assetBaseUrl = () => e.env.assetBaseUrl;

function assetUrl(path) {
  return `${assetBaseUrl()}/assets/${path}`;
}

function cssAt(path) {
  return tags.link(assetUrl(path));
}

function jsAt(path) {
  return tags.script(true, assetUrl(path));
}

function jsModule(name) {
  return jsAt(`compiled/${name}${e.env.minifiedAssets ? '.min':''}.js`);
}

let helper = {
  assetUrl
};

helper.defaultCsp = (ctx) => {
  let csp = basicCsp();
  return csp.withNonce(ctx.nonce);
};

function basicCsp() {
  let { env } = e;

  let assets = `${assetDomain()}`;

  return new ContentSecurityPolicy({
    defaultSrc: ["'self'", assets],
    styleSrc: ["'self'", `'unsafe-inline'`, assets],
    fontSrc: ["'self'", assetDomain(), 'https://fonts.gstatic.com'],
    imgSrc: ['data:', '*'],
    scriptSrc: ["'self'", assets],
    baseUri: ["'none'"]
  });
};

helper.cssTag = name => 
cssAt(`css/${name}.${e.env.minifiedAssets?'min':'dev'}.css`);

helper.jsModule = jsModule;
helper.editorTag = () => jsModule('editor');
helper.sectionTag = () => jsModule('section');
helper.openingsTag = () => jsModule('openings');
helper.chessmdTag = () => jsAt('javascripts/vendor/bundle.js');

helper.embedJsUnsafe = (js) => ctx => {

  let nonce = ctx.nonce ? ` nonce="${ctx.nonce}"`:'';

  return `<script${nonce}>${js}</script>`;
};

helper.embedJsUnsafeLoadThen = (js) => ctx => {
  return helper.embedJsUnsafe(`cishard.load.then(()=>{${js}})`)(ctx);
};

helper.safeJsonValue = _ => JSON.stringify(_);

module.exports = helper;
