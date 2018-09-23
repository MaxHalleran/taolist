exports.up = function(knex, Promise) {
  return knex.schema.createTable('description', function (table) {
    table.increments('description_id');
    table.integer('item_id');
    table.string('description');

    table.foreign('item_id').references('item_id').inTable('item');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('description');
};
