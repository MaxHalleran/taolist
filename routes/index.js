'use strict';

const express = require('express');

const router = express.Router();

const indexHelper = require('./routeHelper/indexHelper.js');

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    .get((req, res) => {
      const cookie = req.session;
      console.log('====cookie', cookie);
      if (indexHelper.logStatus(cookie)) {
        dbAccess.getListList(cookie.user_id)
          .then((userLists) => {
            const nameList = [];
            console.log(userLists);
            userLists.forEach((list) => {
              console.log(list);
              nameList.push(list.name);
            });

            // render page
            res.render('index', { cookie });
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
