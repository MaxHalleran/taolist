'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const cookieSession = require('cookie-session')
const express = require('express');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const app = express();
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');

const dbAccess = require('./public/scripts/utility/dbAccess')(knex);

// Seperated Routes for each Resource
const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');
const itemRoute = require('./routes/item');
const listRoute = require('./routes/list');
const registerRoute = require('./routes/register');
const categorize = require('./categorize')
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
let userstuff = "Harry Potter"
categorize(userstuff)
app.use(cookieSession({
  name: 'session',
  keys: ['suppalightohousegottariot'],
  maxAge: 24 * 60 * 60 * 1000,
}));


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', sass({
  src: `${__dirname}/styles`,
  dest: `${__dirname}/public/styles`,
  debug: true,
  outputStyle: 'expanded',
}));
app.use(express.static('public'));

// Mount all resource routes
app.use('/api/user', userRoute(dbAccess));
app.use('/api/item', itemRoute(dbAccess));
app.use('/api/list', listRoute(dbAccess));
app.use('/api/register', registerRoute(dbAccess));

app.post('/logout', (req, res) => {
  console.log('in logout route');
  req.session = null;
  res.redirect('/');
});

app.use('/', indexRoute(dbAccess));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
