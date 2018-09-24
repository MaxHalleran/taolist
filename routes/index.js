'use strict';

const express = require('express');

const router = express.Router();

const indexHelper = require('./routeHelper/indexHelper.js');

// const onLoad = require('../public/scripts/pageBehaviour/onLoad.js');

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    .get((req, res) => {
      const cookie = req.session;
      if (indexHelper.logStatus(cookie)) {
        dbAccess.getListList(cookie.user_id)
          .then((userLists) => {
            userLists.forEach((list) => {
              console.log(list.list_id);
              // onLoad.renderLists("ToWatch", ['Movie 1', 'Movie 2', 'Movie 3']);
              dbAccess.getList(list.list_id)
                .then((item) => {
                  console.log(item);
                });
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
