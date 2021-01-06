module.exports = function ContentSecurityPolicy({
  defaultSrc,
  styleSrc,
  fontSrc,
  imgSrc,
  scriptSrc,
  baseUri,
}) {

  this.withNonce = nonce => {
    scriptSrc = [nonce.scriptSrc, ...scriptSrc];
    return this;
  };


  this.toString = () => {
    
    let _res = {
      'default-src': defaultSrc,
      'style-src': styleSrc,
      'font-src': fontSrc,
      'img-src': imgSrc,
      'script-src': scriptSrc,
      'base-uri': baseUri
    };


    let res = '';

    for (let directive in _res) {
      let sources = _res[directive];

      res += `${directive} ${sources.join(' ')}; `;
    }
    return res;
  };

};
