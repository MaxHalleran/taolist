exports.up = function(knex, Promise) {
  return knex.schema.createTable('ip', function (table) {
    table.increments('id');
    table.string('ip');
    table.integer('user_id');

    table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ip');
};
