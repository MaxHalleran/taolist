/* eslint-disable */

'use strict';

const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');

// the adhoc guest database for users who are not logged in
const guestDatabase = {
  guestId: {
    toWatch:[],
    toEat:[],
    toRead:[],
    toBuy:[],
  }
}

module.exports = function userRoutes(dbAccess) {
  const routeFunction = require('./routeHelper/routeFunction');

  async function awaitFunction(username) {
    console.log(await dbAccess.getUser(username));
  }

  router.route('/')
    .get((req, res) => {
      console.log('in get user');
      dbAccess.getUser('Alice')
        .then((user) => {
        res.json(user);
      });
      awaitFunction('Alice');
    })
    .post((req, res) => {
      // log in route. Needs to retrieve user info. We'll need the username and password from the user.
      const username = req.body.username;
      const userpass = req.body.password;
      let isUser;
      dbAccess.getUser(username)
        .then((user) => {
          if (routeFunction.validateLogin(userpass, user.password)) {
            // yay they match
            req.session.user_id = user.id;
            res.json(user);
          } else {
            // error, they didn't match
            res.json('false');
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
