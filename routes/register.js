'use strict';

const express = require('express');

const bcrypt = require('bcrypt');

const router = express.Router();

module.exports = (dbAccess) => {
  router.route('/')
    .get((req, res) => {
      // opens the register page/prompt. Maybes logs something. This route is mostly for ajax.
      res.status(200);
    })
    .post((req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const username = req.body.username;
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);

      // handle errors
      if (!email || !password || !username) {
        res.status(400).send('400 Error: Email or password was not filled.');
      } else {
        // try to find user based on email, return user if found
        dbAccess.getEmail(email)
          .then((realUser) => {
            if (!realuser.length === 0) {
              console.log('Email taken');
              res.status(400).send('400 Error: Email has already registered.');
            }
            // register user
            dbAccess.saveUser()
          })
      }
      else {
        // for new user save username, email, hashedpassword to db then retrieve the db id for the user and set their cookies
        res.redirect('/lists');
      }
    });

  return router;
};
