let http = require('http');
let path = require('path');

let express = require('express');
let cookieParser = require('cookie-parser');

let cookieSession = require('cookie-session');

let app = express();

let server = http.createServer(app);

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

let Env = require('./env');
let env = new Env(app);


let helper = require('./html/helper');
helper.environment.setEnv(env);

function boot() {
  env.setServer(server);
}

env.awaitVariables().then(() => {

  app.use(cookieSession({
    name: 'rk2',
    // secret: Math.random().toString(36).substring(2),
    secret: env.cookieSecret,
    maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
  }));

  let routes = require('./routes')(env);
  app.use('/', routes);
});

module.exports = { app, server, boot };
