const settings = require('../../../.env'); // personal settings
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: settings.DB_HOST,
    user: settings.DB_USER,
    password: settings.DB_PASS,
    database: settings.DB_NAME,
    port: settings.DB_PORT,
    ssl: settings.DB_SSL,
  },
});

module.exports = knex;

// This file is temporary and is most likely not needed.
