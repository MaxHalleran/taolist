'use strict';

const express = require('express');

const router = express.Router();

module.exports = function listRoutes(dbAccess) {
  router.route('/')
    .get((req, res) => {
      dbAccess.getList(req.body.id)
        .then((list) => {
          res.json(list);
        });
    })
    .post((req, res) => {
      const cookie = req.session.user_id;
      const item = req.body;
      // for existing user, add item to db
      if (cookie) {
      // add item to db

      } else { // for guest, add item to guestDatabase object
        const guestId = generateRandomString();
        const category = categorizeItem(item);
        guestDatabase[guestId][category].push(item);
        res.redirect('/lists');
      }
    })
    .put('/lists/:id', (req, res) => {
      const cookie = req.session;
      const newItem = req.body;
      // for existing user, update item on db
      if (cookie.user_id) {
        // update item on db
      } else {
        // for guest, update item on guestDatabase object

        const guestId = generateRandomString();
        const category = categorizeItem(item);
        // find index from specific catetory
        // find originalItem
        const index = category.indexOf('originalItem');
        guestDatabase[guestId][category][index] = newItem;
        res.redirect('/lists');
      }
    })
    .delete((req, res) => {
      const item = req.params.id;
      // delete item on db
      deleteItem();
    })

    return router;
};
