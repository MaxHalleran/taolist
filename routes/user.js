'use strict';

const express = require('express');

const router = express.Router();

// the adhoc guest database for users who are not logged in
const guestDatabase = {
  guestId: {
    toWatch: [],
    toEat: [],
    toRead: [],
    toBuy: [],
  },
};

const routeFunction = require('./routeHelper/routeFunction');

module.exports = function userRoutes(dbAccess) {
  router.route('/:id?')
    /** .get
    * redirects the user to the index
    */
    .get((req, res) => {
      res.redirect('/');
    })

    /** .post (/api/user)
    * the log in route, validates the users login info and if correct sets the cookie and redirects them
    * @param {String}username the username they are checking against, defines the user that we pull from the database
    * @param {String}password the password that is compared and validated
    */
    .post((req, res) => {
      console.log('user/post is firing');
      const { username } = req.body;
      const userpass = req.body.password;
      if (!userpass || !username) {
        res.status(401, { message: 'username and password required' });
      }
      dbAccess.getUser(username)
        .then((user) => {
          if (routeFunction.validateLogin(userpass, user[0].password)) {
            console.log(user[0].user_id);
            req.session.user_id = user[0].user_id;
            req.session.username = user[0].username;
            res.redirect('/');
          } else {
            // error, they didn't match
            res.redirect('/');
          }
        })
    })
    .put((req, res) => {
      // a route to update the users settings.
      // This is an empty route for now
    })
    .delete((req, res) => {
      // placeholder, doesn't do anything and isnt planned to do anything
    })

  return router;
};
