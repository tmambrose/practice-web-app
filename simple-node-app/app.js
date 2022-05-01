const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

// create a new express app
const app = express();

// look for templates in views/
// and use Pug as a layout engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// whenever a request comes from forward slash
// anything, use routes file
app.use('/', routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;
