const bcrypt = require('bcrypt');

exports.seed = function seed(knex, Promise) {
  return knex('user').del()
    .then(() => {
      return Promise.all([
        knex('user').insert({ username: 'Alice', password: bcrypt.hashSync('password', 10), email: 'fake@gmail.com' }),
        knex('user').insert({ username: 'Bob', password: bcrypt.hashSync('password', 10), email: 'faker@gmail.com' }),
        knex('user').insert({ username: 'Charlie', password: bcrypt.hashSync('password', 10), email: 'McFakeFuck@hotmail.com' }),
      ]);
    })
    .then(() => {
      return Promise.all([
        knex('list').insert({ user_id: 1, name: 'Alice\'s first list' }),
        knex('list').insert({ user_id: 1, name: 'Alice\'s second list' }),
        knex('list').insert({ user_id: 1, name: 'Alice\'s third list' }),
        knex('list').insert({ user_id: 1, name: 'Alice\'s fourth list' }),
        knex('list').insert({ user_id: 1, name: 'Alice\'s fifth list' }),
        knex('list').insert({ user_id: 2, name: 'Bob\'s first list' }),
        knex('list').insert({ user_id: 2, name: 'Bob\'s second list' }),
        knex('list').insert({ user_id: 2, name: 'Bob\'s third list' }),
        knex('list').insert({ user_id: 2, name: 'Bob\'s fourth list' }),
        knex('list').insert({ user_id: 2, name: 'Bob\'s fifth list' }),
        knex('list').insert({ user_id: 3, name: 'Charlie\'s first list' }),
        knex('list').insert({ user_id: 3, name: 'Charlie\'s second list' }),
        knex('list').insert({ user_id: 3, name: 'Charlie\'s third list' }),
        knex('list').insert({ user_id: 3, name: 'Charlie\'s fourth list' }),
        knex('list').insert({ user_id: 3, name: 'Charlie\'s fifth list' }),
      ]);
    });
};
