exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', function (table) {
    table.increments('id');
    table.integer('user_id');
    table.string('name');
    table.integer('table_id');

    table.foreign('user_id').references('id').inTable('user');
    table.foreign('table_id').references('id').inTable('list');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item');
};
