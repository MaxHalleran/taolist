'use strict';

const express = require('express');

const router = express.Router();

module.exports = (knex, dbAccess) => {
  router.route('/')
    .get((req, res) => {
      console.log('in get user');
      knex
        .select('*')
        .from('user')
        .then((results) => {
          res.json(results);
        });
      dbAccess.getUser();

    })
    .post((req, res) => {
      // log in route. Needs to retrieve user info. We'll need the username and password from the user.
      const username = req.body.username;
      const userpass = req.body.password;
      let isUser;
      // we need to retrieve the users information from the database in order to compare it.
    })
    .put((req, res) => {
      // change stuff
    })
    .delete((req, res) => {
      // change stuff
    })

  return router;
};
