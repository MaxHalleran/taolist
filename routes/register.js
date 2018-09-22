'use strict';

const express = require('express');
// const app = express();
// const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const router = express.Router();
const knex = require('../public/scripts/utility/client');

// app.use(cookieSession({
//   name: 'session',
//   keys: ['lighthouse-labs'],
//   maxAge: 24 * 60 * 60 * 1000,
//   }
// ));

// Helper functions
function generateRandomString(){
  return  Math.random().toString(20).substring(2, 8);
}

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
            console.log("-----realUser", realUser);
            if (realUser.length !== 0) {
              console.log('Email taken');
              res.status(400).send("Email already registered");
              // res.redirect("/");
            } else {
              // register user
              console.log('----newUser', newUser);
              dbAccess.saveUser(newUser);
              knex('user').insert(newUser)
              .asCallback(function(err, result){
                knex.select("email").from("user")
                .then(console.log);
              })
              dbAccess.getEmail(email).then((realUser) => {
                console.log('----add newUser', realUser);
              })
              // const user_id = generateRandomString();
              req.session.user_id = id;
              res.status(200);
            }
          });
      }
    });

  return router;
};
