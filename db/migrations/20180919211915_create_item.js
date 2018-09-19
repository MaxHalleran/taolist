exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', function (table) {
    table.increments('id');
    table.integer('user_id');
    table.string('name');

    table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item');
};
