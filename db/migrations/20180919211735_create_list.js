exports.up = function(knex, Promise) {
  return knex.schema.createTable('list', function (table) {
    table.increments('list_id');
    table.integer('user_id');
    table.string('name');

    table.foreign('user_id').references('user_id').inTable('user');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('list');
};
