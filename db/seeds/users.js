const bcrypt = require('bcrypt');

exports.seed = function seed(knex, Promise) {
  return knex('user').del()
    .then(() => {
      return Promise.all([
        knex('user').insert({ username: 'Alice', password: bcrypt.hashSync('password', 10), email: 'fake@gmail.com' }),
        knex('user').insert({ username: 'Bob', password: bcrypt.hashSync('password', 10), email: 'faker@gmail.com' }),
        knex('user').insert({ username: 'Charlie', password: bcrypt.hashSync('password', 10), email: 'McFakeFuck@hotmail.com' }),
      ]);
    });
};
