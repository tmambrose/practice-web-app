const express = require('express');
const routes = require('./routes/index');

// create a new express app
const app = express();

// whenever a request comes from forward slash
// anything, use routes file
app.use('/', routes);

module.exports = app;
