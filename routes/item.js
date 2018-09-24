'use strict';

const express = require('express');

const router = express.Router();

const categorize = require('../categorize')();

// categorize(input, output);

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    .get((req, res) => {
      dbAccess.getItem(req.params.id)
        .then((item) => {
          res.json(item);
        });
    })
    .post((req, res) => {
      console.log('entered item post');

      const outArray = [];
      categorize.categorizeThis(req.body.itemName, outArray);

      console.log(outArray);
      console.log('callCat has been called');

      dbAccess.createItem(req.body.itemName, req.session.user_id, req.body.listid)
        .then((item) => {
          res.json(item);
        });
    })
    .put((req, res) => {
      // to change an item
    })
    .delete((req, res) => {
      // to mark it inactive and move it into a 'completed' list
    })

  return router;
};
