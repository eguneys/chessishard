const tags = {};

function tag(tag) {
  return (options, args = []) => {

    let klass = '',
        attrs = '',
        id = '',
        body = '';

    if (options.join || typeof options === "string") {
      body = tags.frag(options);
    } else {

      let { cls, id: _id, ..._attrs } = options;

      if (cls) {
        if (cls.join) {
          klass = cls.join(' ');
        } else {
          klass = cls;
        }
        klass = `class="${klass}" `;
      }

      if (_id) {
        id = `id="${_id}" `;
      }

      if (_attrs) {
        attrs = Object.keys(_attrs).map(_ => {
          return `${_}=${_attrs[_]} `;
        }).join(' ');
      }

      body = tags.frag(args);
    }

    return `<${tag} ${id}${klass}${attrs}>${body}</${tag}>`;
  };
};

tags.frag = (args) => {
  return args.join ? args.join('') : args;
};

tags.raw = (content) => content;

tags.html = () => tag('html');
tags.head = tag('head');
tags.body = tag('body');

tags.div = tag('div');
tags.ul = tag('ul');
tags.li = tag('li');
tags.a = tag('a');
tags.date = tag('date');

tags.link = (href, rel='stylesheet') => {
  return `<link href=${href} rel=${rel}>`;
};

tags.img = (src) => {
  return `<img src=${src}>`;
};

tags.script = (defer, src) => {
  return tag('script')({
    defer: "defer",
    src
  });
};

tags.h1 = tag('h1');
tags.h2 = tag('h2');

tags.span = tag('span');

tags.section = tag('section');

tags.header = tag('header');

tags.headTitle = title => {
  return tag('title')([title]);
};

module.exports = tags;
