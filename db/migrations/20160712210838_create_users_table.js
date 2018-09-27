exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function (table) {
      table.increments('user_id');
      table.string('username');
      table.string('password');
      table.string('email');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
  };