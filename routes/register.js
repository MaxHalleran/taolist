'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const knex = require('../public/scripts/utility/client');

module.exports = (dbAccess) => {
  router.route('/')
    .get((req, res) => {
      // opens the register page/prompt. Maybes logs something. This route is mostly for ajax.
      res.status(200);
    })

    .post((req, res) => {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      };
      console.log(newUser);

      // handle errors
      if (!newUser.email || !newUser.password || !newUser.username) {
        res.status(400).send('400 Error: Email or password was not filled.');
      } else {
        // try to find user based on email, return user if found
        dbAccess.getEmail(newUser.email)
          .then((realUser) => {
            console.log('-----realUser', realUser);
            if (realUser.length !== 0) {
              console.log('Email taken');
              res.status(400).send('Email already registered');
              // res.redirect("/");
            } else {
              // register user
              console.log('----newUser', newUser);
              dbAccess.saveUser(newUser)
                .then(() => {
                  dbAccess.getUser(newUser.username)
                    .then((someoneNew) => {
                      console.log('----add newUser', someoneNew);
                      // create the 6 default lists
                      dbAccess.createList('ToWatch', someoneNew[0].user_id);
                      dbAccess.createList('ToEat', someoneNew[0].user_id);
                      dbAccess.createList('ToRead', someoneNew[0].user_id);
                      dbAccess.createList('ToBuy', someoneNew[0].user_id);
                      dbAccess.createList('other', someoneNew[0].user_id);
                      dbAccess.createList('finished', someoneNew[0].user_id);
                      req.session.user_id = someoneNew[0].user_id;
                      req.session.username = someoneNew[0].username;
                      res.redirect('/');
                    });
                });
            }
          });
      }
    });

  return router;
};
