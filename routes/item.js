'use strict';

const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.route('/')
    .get((req, res) => {
      
    })
    .post((req, res) => {
      // post stuff
    })
    .put((req, res) => {
      // change stuff
    })
    .delete((req, res) => {
      // change stuff
    })

  return router;
};
