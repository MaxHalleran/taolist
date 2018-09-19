exports.up = function(knex, Promise) {
  return knex.schema.createTable('list', function (table) {
    table.increments('id');
    table.integer('user_id');
    table.string('name');
    table.string('category');

    table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('list');
};
