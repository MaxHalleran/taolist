'use strict';

const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.route('/:id')
    .get((req, res) => {
      // a route to get information for a specific item
    })
    .post((req, res) => {
      // the route to create an item
    })
    .put((req, res) => {
      // to change an item
    })
    .delete((req, res) => {
      // to mark it inactive and move it into a 'completed' list
    })

  return router;
};
