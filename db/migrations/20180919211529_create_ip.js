exports.up = function(knex, Promise) {
  return knex.schema.createTable('ip', function (table) {
    table.increments('ip_id');
    table.string('ip');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ip');
};
