exports.up = function(knex, Promise) {
  return knex.schema.createTable('description', function (table) {
    table.increments('id');
    table.integer('item_id');
    table.string('description');

    table.foreign('item_id').references('id').inTable('item');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('description');
};
