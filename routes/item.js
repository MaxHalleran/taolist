'use strict';

const express = require('express');

const router = express.Router();

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    .get((req, res) => {
      console.log('in get item');
      console.log(req.params.id);
      dbAccess.getItem(req.params.id)
        .then((item) => {
          console.log(item);
          res.json(item);
        });
    })
    .post((req, res) => {
      console.log('in make item');
      console.log(req.body.itemName, req.session.user_id, req.body.listid);
      dbAccess.createItem(req.body.itemName, req.session.user_id, req.body.listid)
        .then((item) => {
          console.log(item);
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
