let e = require('./helper/env');
let tags = require('./tags');
let helper = require('./helper');
let trans = require('./trans');

let doctype = tags.raw('<!DOCTYPE html>');
let htmlTag = tags.html();
let topComment = tags.raw('<!-- Chessishard is open source! See https://github.com/eguneys/chessishard -->');
let viewport = tags.raw('<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">');


let base = {};

base.layout = function layout(title, body, {
  chessmd,
  moreCss,
  moreJs,
  openGraph,
  buttons = []
}, ctx) {
  // let fonts = tags.link('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

  let metaCsp = (csp = helper.defaultCsp(ctx)) =>
      tags.raw(`<meta http-equiv="Content-Security-Policy" content="${csp}">`);

  let favicons = [512, 128, 64, 32]
      .map(px => tags.raw(`
<link rel="icon" type="image/png" href="${helper.assetUrl(`images/cis${px}x${px}.png`)}" sizes="${px}x${px}"/>
`)
          ).join('');

  return tags.frag([
    doctype,
    htmlTag({ lang: 'en' }, [
      topComment,
      tags.head([
        viewport,
        metaCsp(),
        tags.headTitle(`${title} • chessishard.com`),
        helper.cssTag('fonts'),
        helper.cssTag('site'),
        //fonts,
        moreCss,
        chessmd ? helper.cssTag('main') : '',
        tags.meta({ content: openGraph?openGraph.description:trans.siteDescription,
                    name: 'description' }),
        favicons,
        openGraph?openGraph.frags:''
      ]),
      tags.body({
        cls: [],
        'data-dev': e.env.minifiedAssets?"false": "true",
      },[
        siteHeader(buttons),
        tags.div({
          id: "main-wrap",
          cls: [
          ]
        }, body),
        loadScripts(moreJs, chessmd, ctx)
      ])
    ])
  ]);
};

function siteHeader(buttons) {
  return tags.header({ id: 'top' }, [
    tags.div({ cls: 'site-title-nav' }, [
      tags.h1({ cls: 'site-title' }, [
        tags.a({ href: "/" }, ['📘 Chess Is Hard']
              )
      ]),
      // tags.nav({ id: 'topnav' }, [
      //   tags.section([
      //     tags.a({ href: '/opening' }, 'Opening')
      //   ])
      // ])
    ]),
    tags.div({ cls: 'site-buttons' }, [
      ...buttons
    ])
  ]);
}

function cishardJsObject(ctx) {
  return helper.embedJsUnsafe(`cishard={load:new Promise(r=>{window.onload=r})}`)(ctx);
}

function loadScripts(moreJs, chessmd, ctx) {
  return tags.frag([
    chessmd ? helper.chessmdTag() : '',
    cishardJsObject(ctx),
    helper.jsModule("site"),
    moreJs
  ]);
}

module.exports = base;
