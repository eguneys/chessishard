const oauth = require('simple-oauth2');
const fetch = require('node-fetch');

const { userm, sessionm } = require('../model');
let cis = require('./cis');

function Auth(env) {
  
  const client = new oauth.AuthorizationCode({
    client: env.oauthClient,
    auth: {
      tokenHost: 'https://oauth.lichess.org',
      authorizePath: '/oauth/authorize',
      tokenPath: '/oauth'
    },
    http: {
      json: true
    }
  });


  const redirectUri = `${env.domain}/callback`;
  const authorizationUri = client.authorizeURL({
    redirect_uri: redirectUri,
    scope: ['preference:read', 'challenge:write', 'bot:play', 'board:play'],
    state: Math.random().toString(36).substring(2)
  });

  this.lichess = async function(req, res) {

    let ctx = await cis.reqToCtx(req);

    if (ctx.user) {
      res.redirect('/');
    } else {
      res.redirect(authorizationUri);
    }    
  };


  let saveAuthentication = username =>
      sessionm.insert(username)
      .then(_ => _.id);

  let saveUser = (username, token) =>
      userm.insert({ username, token });

  this.callback = async function(req, res, next) {

    let token = await client.getToken({
      code: req.query.code,
      redirect_uri: redirectUri
    });

    let user = await fetch(`https://lichess.org/api/account`, {
      headers: {
        'Authorization': `Bearer ${token.token.access_token}`
      }
    }).then(res => res.json());


    if (user.error) {
      next(user.error);
      return;
    }

    await saveUser(user.username, token.token.access_token);

    let sessionId = await saveAuthentication(user.username);

    req.session.sessionId = sessionId;
    res.redirect('/');
  };
};

module.exports = (env) => {
  return new Auth(env);
};
