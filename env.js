let { envm } = require('./model');
let Project = require('./project');

module.exports = function(app) {

  this.setServer = (server) => {};  

  this.isProd = app.get('env') === 'production';
  this.minifiedAssets = this.isProd;

  this.domain = this.isProd ? 'https://chessishard.com'
    : 'http://localhost:3000';

  this.assetBaseUrl = this.isProd ? this.domain : '';

  this.awaitVariables = async function() {
    let { name } = await envm.envByKey("project-name");


    if (Project.name !== name) {
      console.error('Wrong Project.');
      process.exit(1);
    } else {
      console.log(`Connected to [${name}] Firestore`);
    }

    let { client_id, client_secret } = await envm.envByKey("lichessapi");

    this.oauthClient = {
      id: client_id,
      secret: client_secret
    };

    let { token } = await envm.envByKey("lichess-oauth2");

    this.oauth2Token = token;

    let { secret } = await envm.envByKey("cookie-secret");

    this.cookieSecret = secret;
  };

};
