/* eslint-disable */

'use strict';

const express = require('express');

const router = express.Router();

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
  async function awaitFunction() {
    console.log(await dbAccess.getUser('Alice'));
  }

  router.route('/')
    .get((req, res) => {
      console.log('in get user');
      let answer;
      answer = dbAccess.getUser('Charlie')
        .then((user) => {
        console.log(user);
      });
      // res.json(await dbAccess.getUser('dave'));
      // res.json(dbAccess.getUser());
    })
    .post((req, res) => {
      // log in route. Needs to retrieve user info. We'll need the username and password from the user.
      const username = req.body.username;
      const userpass = req.body.password;
      let isUser;
      // we need to retrieve the users information from the database in order to compare it.
      awaitFunction();
      console.log('Later');
    })
    .put((req, res) => {
      // a route to update the users settings.
    })
    .delete((req, res) => {
      // placeholder, doesn't do anything and isnt planned to do anything
    })

  return router;
};
