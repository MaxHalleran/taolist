'use strict';

const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.route('/')
    .get((req, res) => {
      // opens the register page/prompt
    })
    .post((req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const hashedPassword = bcrypt.hashSync(password, 10);

      // handle errors
      if (!email || !password) {
        res.status(400).send('400 Error: Email or password was not filled.');
      } else {
        // try to find user based on email, return user if found
        }; if (user) {
          res.status(400).send('400 Error: Email already exists. ')
        }
        else {
          // for new user, save id, username, email, hashedpassword to db
          req.session.user_id = user_id;
          res.redirect("/lists");
        }
    });

  return router;
};
