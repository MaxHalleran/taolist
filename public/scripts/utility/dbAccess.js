'use strict';

const knex = require('./client');

// These function are used to connect to the database, retrieving information and setting information respectively
// Functions and their uses/requirements
// getUser takes a username and returns either {a user object with a user id, username, password and email} or false if they're not in the database
// saveUser takes a user object and stores it in the database. It needs an object with the fields {username, password, email}
// logIp takes an ip addres and returns either a true if the ip address visited previously or a false if not.
// createList will take a name and category (or lack of category) and create a new listCreate
// getList takes a list id and returns a list, the items in that list and their descriptions
// need to decide on item functions

// This function creates the functions that we need using the given database
module.exports = function makeDataHelpers() {
  return {

    // The first two functions are run against the user table. The first returns the information about a specified user, the second creates a user.

    /** getUser
    * takes a username and returns all the information about that user in object format.
    * @param {Object}username
    */
    getUser: function getUser(username) {

    },

    saveUser: function saveUser(response) {

    }

  };
};
//
// const clientQuery = function clientQuery(input) {
//   knex
//     .where('first_name', input)
//     .select()
//     .from('famous_people')
//     .then((result) => {
//       // The first response line
//       console.log(`Found ${result.length} person(s) by the name '${input}'`);
//
//       // outputting the search results. Wow, I did a search.
//       // Dayum, that's like all of bread right there.
//       let counter = 0;
//       result.forEach((person) => {
//         console.log(`- ${++counter}: ${person.first_name} ${person.last_name}, born '${person.birthdate}'`);
//       });
//
//       if (result.length === 0) {
//         console.log('We couldn\'t find anything, would you like to try again? This program is case sensitive');
//       }
//     })
//     .finally(() => {
//       knex.destroy();
//     });
//   return true;
// };
//
// module.exports = clientQuery;
//
//
// // Saves a tweet to `db`
// saveTweet: function(newTweet, callback) {
//   db.collection('tweets').insertOne(newTweet);
//   callback(null, true);
// },
//
// getTweets: function(callback) {
//   const sortNewestFirst = (a, b) => a.created_at - b.created_at;
//   db.collection('tweets').find().toArray(callback);
// },
