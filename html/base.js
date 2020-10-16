let tags = require('./tags');
let helper = require('./helper');

let doctype = tags.raw('<!DOCTYPE html>');
let htmlTag = tags.html();

let base = {};

base.layout = function layout(title, body, {
  chessmd,
  moreCss,
  moreJs
}) {
  let fonts = tags.link('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

  let favicon = tags.raw(`
<link rel="icon" href="data:;base64,iVBORwOKGO=" />
`);

  return tags.frag([
    doctype,
    htmlTag([
      tags.head([
        tags.headTitle(`${title} • chessishard.com`),
        helper.cssTag('site'),
        fonts,
        moreCss,
        chessmd ? helper.cssTag('main') : '',
        favicon
      ]),
      tags.body({
        cls: [
          
        ]
      },[
        siteHeader(),
        tags.div({
          id: "main-wrap",
          cls: [
          ]
        }, body),
        loadScripts(moreJs, chessmd)
      ])
    ])
  ]);
};

function siteHeader() {
  return tags.header({ id: 'top' }, [
    tags.div({ cls: 'site-title-nav' }, [
      tags.h1({ cls: 'site-title' }, [
        tags.a({ href: "/" }, ['Chess Is Hard']
              )
      ])
    ])
  ]);
}

function cishardJsObject() {
  return helper.embedJsUnsafe(`cishard={load:new Promise(r=>{window.onload=r})}`);
}

function loadScripts(moreJs, chessmd) {
  return tags.frag([
    chessmd ? helper.chessmdTag : '',
    cishardJsObject(),
    moreJs
  ]);
}

module.exports = base;
