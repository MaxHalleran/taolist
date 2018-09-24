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
<<<<<<< HEAD
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
=======
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
>>>>>>> 7a15bbb09f2299ce51483917923348573bbcb7ba
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
