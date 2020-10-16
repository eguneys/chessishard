let http = require('http');
let path = require('path');

let express = require('express');
let app = express();

let server = http.createServer(app);

app.use('/assets', express.static(path.join(__dirname, 'public')));


let routes = require('./routes');
app.use('/', routes);


module.exports = { app, server };
