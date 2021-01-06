module.exports.Context = function(ctx, pageData) {

  this.user = ctx.user;
  this.nonce = pageData.nonce;
  
};
