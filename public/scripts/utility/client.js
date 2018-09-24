
const knex = require('knex')({
  client: 'pg',
  connection: {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
  },
});

module.exports = knex;

// This file is temporary and is most likely not needed.
