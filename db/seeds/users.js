exports.seed = function seed(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('user').insert({username: 'Alice', password: 'password', email: 'fake@gmail.com'}),
        knex('user').insert({username: 'Bob', password: 'password', email: 'faker@gmail.com'}),
        knex('user').insert({username: 'Charlie', password: 'password', email: 'McFakeFuck@hotmail.com'}),
      ]);
    });
};
