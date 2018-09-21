'use strict';

const express = require('express');

const router = express.Router();

module.exports = (knex) => {

// const bcrypt = require('bcrypt');

// The majority of these requires aren't required as we're passing this router into the server file.
// const app = express();
// const bodyParser = require("body-parser");
// const cookieSession = require('cookie-session');
//
// const methodOverride = require('method-override');

// PORT is in the .env
// const PORT = 8080;

// Middleware
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieSession({
//   name: 'session',
//   keys: ['lighthouse-labs'],
//   maxAge: 24 * 60 * 60 * 1000,
//   }
// ));
//
// app.use(methodOverride('_method'));

// Helper functions
// function generateRandomString(){
//   return  Math.random().toString(20).substring(2, 8);
// }

// try to match email and password from users table
/*
function checkLogInStatus(email, password, users){
  if (!email || !password) {
      return { logInStatus: "400 Error: Email or password was not filled."}
  } else {
      // find user based on email
      };
      if (!user) {
          return {logInStatus: "403 Error: Email cannot be found"}
      } else if (!bcrypt.compareSync(password, user.hashedPassword)) {
          return {logInStatus: "403 Error: Password does not match"}
      } else {
          return {logInStatus: "Login successfully"}
      }
  }
*/

// find user from users table based on email
// function findUser(users, email){
//   // find match email from users table
//   return user;
// }

// I think we could have a '/user/register' for registering. Thumbs up.
// we could use method chaining here to unify this code.

// app.get('/login', (req, res) => {
//   if (req.session.user_id) {
//     res.redirect('/lists');
//   } else {
//     res.render('login');
//   }
// });

// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;
//
//   let status = checkLogInStatus(email, password, users);
//   if(status.logInStatus !== "Login successfully"){
//       let templateVars = {
//           status: status
//         };
//       res.render("logInError", templateVars);
//     } else {
//       const user = findUser(users, email);
//       // find user_id from users table
//       req.session.user_id = users.user_id;
//       res.redirect("/lists");
//     }
// })
//
// app.post("/logout", (req, res) => {
//   req.session = null;
//   res.redirect("/login");
// })

router.route

router.get('/lists', (req, res) => {
  res.json({ });
})

router.post('/lists', (req, res) => {
  const cookie = req.session;
  const item = req.body;
  // for existing user, add item to db
  if(cookie.user_id){
    // add item to db

  } else { // for guest, add item to guestDatabase object
    const guestId = generateRandomString();
    const category = categorizeItem(item);
    guestDatabase[guestId][category].push(item);
    res.redirect("/lists");
  }
})

router.put('/lists/:id', (req, res) => {
  const cookie = req.session;
  const newItem = req.body;
  // for existing user, update item on db
  if(cookie.user_id){
    // update item on db
  } else { // for guest, update item on guestDatabase object

    const guestId = generateRandomString();
    const category = categorizeItem(item);
    // find index from specific catetory
    // find originalItem
    const index = category.indexOf('originalItem');
    guestDatabase[guestId][category][index] = newItem;
    res.redirect("/lists");
  }
})

router.delete('/lists/:id', (req, res) => {
  const item = req.params.id;
  //delete item on db
  deleteItem();
})

return router;
};
