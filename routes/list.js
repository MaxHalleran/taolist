'use strict';

const express = require('express');

const router = express.Router();

module.exports = (dbAccess) => {

router.route

router.get('/lists', (req, res) => {
  res.json({ });
})

router.post('/lists', (req, res) => {
  const cookie = req.session;
  const item = req.body;
  // for existing user, add item to db
  if(cookie.user_id){
    // add item to db

  } else { // for guest, add item to guestDatabase object
    const guestId = generateRandomString();
    const category = categorizeItem(item);
    guestDatabase[guestId][category].push(item);
    res.redirect("/lists");
  }
})

router.put('/lists/:id', (req, res) => {
  const cookie = req.session;
  const newItem = req.body;
  // for existing user, update item on db
  if(cookie.user_id){
    // update item on db
  } else { // for guest, update item on guestDatabase object

    const guestId = generateRandomString();
    const category = categorizeItem(item);
    // find index from specific catetory
    // find originalItem
    const index = category.indexOf('originalItem');
    guestDatabase[guestId][category][index] = newItem;
    res.redirect("/lists");
  }
})

router.delete('/lists/:id', (req, res) => {
  const item = req.params.id;
  //delete item on db
  deleteItem();
})

return router;
};
