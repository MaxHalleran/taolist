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
    * @param {String}username
    */
    getUser: function getUser(username) {
      return knex
        .select('*')
        .from('user')
        .where('username', username)
    },

    /** getEmail
    * takes an email and checks if it's already present in the database
    * @param {String}email
    */
    getEmail: function getEmail(email) {
      return knex
        .select('email')
        .from('user')
        .where('email', email)
    },

    /** saveUser
    * takes a user object and creates a new user in the Database
    * @param {Object}user
    */
    saveUser: function saveUser(newUser) {
      return knex
        .from('user')
        .insert(newUser);
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
      return knex
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
    * @param {Number}listid
    */
    createList: function createList(listName, userid, listid) {
      return knex
        .from('list')
        .insert({
          name: listName,
          user_id: userid,
          list_id:listid
        });
    },

    /** getListByUser
    * takes a list id and returns a list object with key values: name, category and an  array of item objects each with the items name and any descriptions that they have
    * @param {Number}userid
    */
    getListByUser: function getList(userid) {
      return knex
        .from('item')
        .where('user_id', userid)
        .select('*')
    },

    /** getList
    * takes a list id and returns a list object with key values: name, category and an  array of item objects each with the items name and any descriptions that they have
    * @param {Number}listId
    */
    getList: function getList(listid) {
      return knex
        .from('item')
        .where('list_id', listid)
        .select('*')
    },

    /** getListList
    * takes a list id and returns a list object with key values: name, category and an  array of item objects each with the items name and any descriptions that they have
    * @param {Number}userId
    */
    getListList: function getListList(userid) {
      return knex
        .from('list')
        .where('user_id', userid)
        .select('*')
    },

    /** getFinishedList
    * takes a list id and returns a list id of a list ownder by the current user with the name 'Finished'
    * @param {Number}userid
    */
    getFinishedList: function getFinishedList(userid) {
      return knex
        .from('list')
        .where('user_id', userid)
        .andWhere('name', 'Finished')
        .select('*')
    },

    /** changeList
    * takes a listid and an object with keys of 'name' and 'category' and change those values inside the Database
    * @param {Number}listId
    * @param {Object}changeUser
    */
    changeList: function changeList(listid, changes) {
      // going to add the ability to update a list
    },

    /** checkList
    * takes a list_id and checks to see if its table name matches an input pattern. Mainly used to check whether an item is in a completed list.
    * @param {Number}list_id
    * @param {String}tableName
    */
    checkList: function checkList(listid, tableName) {
      return knex
        .select('*')
        .from('list')
        .where('list_id', listid)
        .andWhere('name', tableName)
    },

    /** deleteList
    * takes a list id and deletes the list and all of the items stored within it
    * @param {Number}listId
    */
    deleteList: function deleteList(listId) {
      return knex
        .from('list')
        .where('id', listId)
        .del();
    },

    /** getItem
    * takes an item id and returns an item
    * @param {Number}item_id
    */
    getItem: (itemid) => {
      return knex
        .select('*')
        .from('item')
        .where('item_id', itemid)
    },

    /** createItem
    * takes an item name and an array of itemDescription's and adds that into the Database
    * @param {String}itemName
    * @param {Array}itemDescription
    * @param {Array}listid
    */
    createItem: function createItem(itemName, userid, listid) {
      return knex
        .from('item')
        .insert({
          name: itemName,
          user_id: userid,
          list_id: listid,
        })
    },

    /** changeItemsList
    * takes in an item_id, a value and a property and chabges the property of the item with the given value
    * @param {Number}item_id
    * @param {String}property
    * @param {value}value
    */
    changeItemsList: function changeItemsList(itemid, listid) {
      return knex
        .from('item')
        .where('item_id', itemid)
        .update({
          list_id: listid,
        })
    },

    /** deleteItem
    * takes an item id and changes it's state to 'completed'. Does not destroy the item,  just changes the state.
    * @param {Number}itemid
    */
    deleteItem: function deleteItem(itemid) {
      return knex
        .from('item')
        .where('item_id', itemid)
        .del()
    },
  };
};
