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

    /** .post register
    * checks if there are any empty fields then checks to see if the email is currently in the database.
    * If it passes both tests, the users password is hashed and the user is stored in the database.
    * 6 'default' lists are added to the user is the database.
    * @param {String} email
    * @param {String} username
    * @param {String} password
    */
    .post((req, res) => {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      };

      // handle errors
      if (!newUser.email || !newUser.password || !newUser.username) {
        res.status(400).send('400 Error: Email or password was not filled.');
      } else {
        // try to find user based on email, return user if found
        dbAccess.getEmail(newUser.email)
          .then((realUser) => {
            if (realUser.length !== 0) {
              res.status(400).send('Email already registered');
              // res.redirect("/");
            } else {
              // register user
              dbAccess.saveUser(newUser)
                .then(() => {
                  dbAccess.getUser(newUser.username)
                    .then((someoneNew) => {
                      // create the 6 default lists
                      const createWatchList = dbAccess.createList('To Watch', someoneNew[0].user_id);
                      const createEatList = dbAccess.createList('To Eat', someoneNew[0].user_id);
                      const createReadList = dbAccess.createList('To Read', someoneNew[0].user_id);
                      const createBuyList = dbAccess.createList('To Buy', someoneNew[0].user_id);
                      const createOtherList = dbAccess.createList('Other', someoneNew[0].user_id);
                      const createFinishedList = dbAccess.createList('Finished', someoneNew[0].user_id);


                      Promise.all([createWatchList, createEatList, createReadList, createBuyList, createOtherList, createFinishedList])
                        .then(() => {
                          req.session.user_id = someoneNew[0].user_id;
                          req.session.username = someoneNew[0].username;
                          res.redirect('/');
                        });
                    });
                });
            };
        });
    };
  });
  return router;
};
