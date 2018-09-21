'use strict';

// These function are used to connect to the database, retrieving information and setting information respectively
// Functions and their uses/requirements
// getUser takes a username and returns either {a user object with a user id, username, password and email} or false if they're not in the database
// saveUser takes a user object and stores it in the database. It needs an object with the fields {username, password, email}
// logIp takes an ip addres and returns either a true if the ip address visited previously or a false if not.
// createList will take a name and category (or lack of category) and create a new listCreate
// getList takes a list id and returns a list, the items in that list and their descriptions
// need to decide on item functions

// This function creates the functions that we need using the given database
module.exports = function dbAccess(knex) {
  return {

/** getUser
* takes a username and returns all the information about that user in object format.
* @param {Object}username
*/
    getUser: (username) => {
      return knex
        .select('*')
        .from('user')
        .where('username', username)
    },

    /** saveUser
    * takes a user object and creates a new user in the Database
    * @param {Object}user
    */

    saveUser: function saveUser(user) {
      knex
        .from('user')
        .insert({
          username: user.username,
          password: user.password,
          email: user.email,
        });
    },

    /** changeUser
    * takes a userid and a value, an object contain key value pairs, and changes the users settings
    * @param {Number}userid
    * @param {Object}value
    */
    changeUser: function changeUser(userid, value) {
      // this function will allow the user to update their settings
    },

    /** logIp
    * takes an ip address and returns true if the ip has been recorded previously or false if otherwise
    * @param {String}ip
    */
    logIp: function logIp(currentIp) {
      knex
        .select('ip')
        .from('ip')
        .where('ip', currentIp)
        .then((present) => {
          if (present) {
            return true;
          }
          knex
            .from('ip')
            .insert({
              ip: currentIp,
            })
            .then(() => false)
        });
    },

    /** createList
    * takes a users id, a list name and a category and makes a list in the database
    * @param {Number}userid
    * @param {String}listName
    * @param {String}category
    */
    createList: function createList(listName, userid, category) {
      knex
        .from('list')
        .insert({
          name: listName,
          user_id: userid,
          category,
        });
    },

    /** getList
    * takes a list id and returns a list object with key values: name, category and an  array of item objects each with the items name and any descriptions that they have
    * @param {Number}listId
    */
    getList: function getList(listid) {
      knex
        .select('*')
        .from('table')
        .where('id', listid)
        .then(results => results);
    },

    /** changeList
    * takes a listid and an object with keys of 'name' and 'category' and change those values inside the Database
    * @param {Number}listId
    * @param {Object}changeUser
    */
    changeList: function changeList(listid, changes) {
      // going to add the ability to update a list
    },

    /** deleteList
    * takes a list id and deletes the list and all of the items stored within it
    * @param {Number}listId
    */
    deleteList: function deleteList(listId) {
      knex
        .from('list')
        .where('id', listId)
        .del();
    },

    /** createItem
    * takes an item name and an array of itemDescription's and adds that into the Database
    * @param {String}itemName
    * @param {Array}itemDescription
    */
    createItem: function createItem(itemName, userid, listid, itemDescription) {
      let itemNum;
      knex
        .from('item')
        .insert({
          name: itemName,
          user_id: userid,
          list_id: listid,
        })
        .then((item) => {
          itemNum = item.id;
        });
    },

    /** deleteItem
    * takes an item id and changes it's state to 'completed'. Does not destroy the item,  just changes the state.
    * @param {Number}itemid
    */
    deleteItem: function deleteItem(itemid) {
      // delete's an item
    },
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