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
      async function asyncFunction(input1, input2, callback) {
        return callback(input1, input2);
      }

      console.log(asyncFunction(req.body.itemName, outArray, categorize.categorizeThis));
      // categorize.categorizeThis(req.body.itemName, outArray)
      //   .then(async (resultant) => {
      //     console.log('after calling the motherfucker ', await resultant);
      //   });

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
