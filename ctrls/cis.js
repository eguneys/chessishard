let { userm, sessionm } = require('../model');

let { Nonce } = require('../modules/common');
let { Context } = require('../modules/user');

let res = {};

res.reqToCtx = async (req) => {
  return restoreUser(req).then(d => {
    let ctx = d;
    return pageDataBuilder(ctx).then(_ => new Context(ctx, _));
  });  
};

async function restoreUser(req) {
  let { sessionId } = req.session;

  if (!sessionId) {
    return {};
  }

  let session = await sessionm.byId(sessionId);

  if (!session) {
    return {};
  }

  let user = await userm.byId(session.userid);

  return {
    user
  };
}

async function pageDataBuilder(ctx) {

  let nonce = Nonce.random();

  return {
    nonce
  };  
}

module.exports = res;
