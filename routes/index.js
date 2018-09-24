'use strict';

const express = require('express');

const router = express.Router();

const indexHelper = require('./routeHelper/indexHelper.js');

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    .get((req, res) => {
      const cookie = req.session;
      if (indexHelper.logStatus(cookie)) {
        dbAccess.getListList(cookie.user_id)
          .then((userLists) => {
            console.log(userLists);
            return userLists;
          })
          .then((userLists) => {
            dbAccess.getListByUser(cookie.user_id)
              .then((itemList) => {
                console.log('------------------------------------------------------\n This is the main test');
                console.log('cookie: ', cookie, 'userLists: ', userLists, 'itemList: ', itemList);
                res.render('index', { cookie, userLists, itemList });
              });
          });
      } else {
        res.render('index', { cookie });
      }
    })
    .post((req, res) => {

    })
    .put((req, res) => {
      // to change an item
    })
    .delete((req, res) => {
      // to mark it inactive and move it into a 'completed' list
    })

  return router;
};
