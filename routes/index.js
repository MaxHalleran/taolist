'use strict';

const express = require('express');

const router = express.Router();

const indexHelper = require('./routeHelper/indexHelper');

// /** logStatus
// * takes a cookie and return false if it is empty and true otherwise.
// * @param {Object}cookie
// */
// function logStatus(cookie) {
//   console.log('testing log status');
//   if (Object.keys(cookie).length === 0) {
//     return false;
//   }
//   if (Object.keys(cookie).length !== 0) {
//     return true;
//   }
//   return false;
// };

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    /** index .get
    * the only route that renders something
    */
    .get((req, res) => {
      const cookie = req.session;
      if (indexHelper.logStatus(cookie)) {
        dbAccess.getListList(cookie.user_id)
          .then((userLists) => {
            dbAccess.getListByUser(cookie.user_id)
              .then((itemList) => {
                console.log("{cookie, userLists, itemList}:", cookie, "-------", userLists, "========",itemList);
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
    });

  return router;
};
