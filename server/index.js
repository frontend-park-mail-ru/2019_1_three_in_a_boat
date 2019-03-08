const express = require('express');
const path = require('path');
const cookie = require('cookie-parser');
const logger = require('morgan');

const app = express();

const publicDir = path.resolve(__dirname, '../', 'static', 'public');

app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cookie());

if (process.env.EXPRESS_DEBUG === 'ON') {
  const sassMiddleware = require('node-sass-middleware');

  app.use(sassMiddleware({
    src: path.join(__dirname, '../', 'static', 'scss'),
    dest: path.join(__dirname, '../', 'static', 'public', 'css'),
    prefix: '/css',
    sourceMap: true,
    debug: true,
  }));
}

app.use(express.static(publicDir));

module.exports = app;
