
exports.up = function(knex) {
  return knex.schema.createTable('bathrooms', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('reference').notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('bathrooms')
};
