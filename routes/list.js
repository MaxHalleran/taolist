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
      const listName = req.body.listName;
      // for existing user, add item to db
      if (cookie) {
      // add list to db
        dbAccess.createList(listName, cookie)
          .then(() => {
            console.log('Inside list/post');
          });
      } 
      res.redirect('/');
    })
    .put((req, res) => {
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
      // deleteItem();
    })

  router.route('/:id?')
    .get((req, res) => {
      console.log('in get list id route');
      console.log(req.params.id);
      dbAccess.getList(req.params.id)
        .then((list) => {
          console.log(list);
          res.json(list);
        });
    });

  router.route('/userList/:id?')
    .get((req, res) => {
      console.log('in get multiple list id route');
      console.log(req.params.id);
      dbAccess.getListList(req.params.id)
        .then((list) => {
          console.log(list);
          res.json(list);
        });
    });

  return router;
};
