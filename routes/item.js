'use strict';

const express = require('express');

const router = express.Router();
const indexHelper = require("./routeHelper/indexHelper");
const methodOverride = require('method-override');
router.use(methodOverride('_method'));
// const categorize = require('../categorize')();

// categorize(input, output);

module.exports = function itemRoutes(dbAccess) {
  router.route('/:id?')
    /** item .get
    * returns an item as a json file
    * @param {Number} item_id the id of the item
    */
    .get((req, res) => {
      console.log("=====id:", req.params.itemName);
      // dbAccess.getItem(req.params.id)
      dbAccess.getItem(req.params.id)
        .then((item) => {
          res.json(item);
        });
    })
    /** item .post
    * creates an item and categorizes it
    * @param {String} item_name the item the user enters
    */
    .post((req, res) => {
      console.log('entered item post');
      console.log(req.body);

      dbAccess.createItem(req.body.itemName, req.session.user_id, req.body.category)
        .then(() => {
          res.redirect('/');
        });
      // const outArray = [];
      // async function asyncFunction(input1, input2, callback) {
      //   return callback(input1, input2);
      // }

      // console.log(asyncFunction(req.body.itemName, outArray, categorize.categorizeThis));
      // categorize.categorizeThis(req.body.itemName, outArray)
      //   .then(async (resultant) => {
      //     console.log('after calling the motherfucker ', await resultant);
      //   });
    })
    /** item .put
    * edits an item, should be used to change which list the item belongs to
    * @param {Number} item_id id of the item to be edited
    */
    .put((req, res) => {
      // to change an item
      console.log('in edit item');
      console.log('=====item id is: ', req.body.item_id, 'item name is', req.body.itemName);
      dbAccess.changeItemsList(req.body.item_id, req.body.itemName)
      .then(() => {
        res.redirect('/');
      })
    })
    /** item .delete
    * checks if the item is in the finished list and if not moves it into the finished list.
    * otherwise deletes the item
    * @param {Number} item_id
    */
    .delete((req, res) => {
      dbAccess.getItem(req.body.item_id)

        .then((item) => {
          dbAccess.checkList(item[0].list_id, 'Finished')

            .then((result) => {
              console.log('the resultant array is: ', result);
              if (result.length === 0) {
                console.log('changing to the finished list');
                dbAccess.getFinishedList(req.session.user_id)

                  .then((finishedList) => {
                    console.log('the finished list is: ', finishedList, 'the item_id is: ', req.body.item_id, 'the list is is:', finishedList[0].list_id);
                    dbAccess.changeItemsList(req.body.item_id, finishedList[0].list_id)
                      .then(() => {
                        res.redirect('/');
                      });
                  });

              } else {
                console.log('deleting ', item[0].name);
                dbAccess.deleteItem(item[0].item_id)
                  .then(() => {
                    res.redirect('/');
                  });
              }
            });
        });
    });

  return router;
};
