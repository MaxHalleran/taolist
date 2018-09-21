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
      const user = {
      email: req.body.email,
      username: req.body.username,
      password =    bcrypt.hashSync(req.body.password, 10),
      }
      console.log(user);

      // handle errors
      if (!user.email || !user.password || !user.username) {
        res.status(400).send('400 Error: Email or password was not filled.');
      } else {
        // try to find user based on email, return user if found
        dbAccess.getEmail(user.email)
          .then((realUser) => {
            console.log('What is realuser?', realUser.length);
            if (!realUser.length === 0) {
              console.log('Email taken');
              res.status(400).send('400 Error: Email has already registered.');
            }
            // register user
            dbAccess.saveUser(user);
            res.status(200);
          })
      };
    });

  return router;
};
