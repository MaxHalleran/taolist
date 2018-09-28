exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', function (table) {
    table.increments('item_id');
    table.integer('user_id');
    table.string('name');
    table.integer('list_id');

    table.foreign('user_id').references('user_id').inTable('user');
    table.foreign('list_id').references('list_id').inTable('list');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item');
};