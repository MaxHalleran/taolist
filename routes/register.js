'use strict';

const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.route('/')
    .get((req, res) => {
      // get stuff
    })
    .post((req, res) => {
      // post stuff
    })

  return router;
};
