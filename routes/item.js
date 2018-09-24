'use strict';

const express = require('express');

const router = express.Router();

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    .get((req, res) => {
      dbAccess.getItem(req.params.id)
        .then((item) => {
          res.json(item);
        });
    })
    .post((req, res) => {
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
