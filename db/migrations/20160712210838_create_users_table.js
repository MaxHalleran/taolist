exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id');
    table.string('username');
    table.string('password');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
