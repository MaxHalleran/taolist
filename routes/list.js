'use strict';

const express = require('express');

const router = express.Router();

module.exports = function listRoutes(dbAccess) {
  router.route('/')
    /** list .get
    * utility route, gets a list and returns a json file that contains the items inside a list
    * @param {String} list_id The id of the list that you want passed back
    */
    .get((req, res) => {
      dbAccess.getList(req.body.id)
        .then((list) => {
          res.json(list);
        });
    })
    /** list .post
    * create's a new list. Currently a utility route as only the default routes are used.
    * @param {String} list_name the name of the list the user is creating
    * @param {Number} user_id the id of the user, stored in their cookie
    */
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
    /** list .put
    * the route to edit a list, currently utility
    * @param {Number} list_id
    */
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
    /** list .delete
    * deletes a list. currently unused utility route
    * @param {Number} list_id the id of the list to be deleted
    */
    .delete((req, res) => {
      const item = req.params.id;
      // delete item on db
      // deleteItem();
    })

  router.route('/:id?')
    /** list/:id .get
    * gets a list by the list id and returns it as a json file
    * @param {Number} list_id
    */
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
    /** list/userList/:idea
    * takes a user id and returns a collection of the lists that they 'own'
    * @param {Number} user_id stored in the cookie
    */
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
