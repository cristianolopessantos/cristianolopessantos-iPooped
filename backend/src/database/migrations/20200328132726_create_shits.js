
exports.up = function(knex) {
  return knex.schema.createTable('shits', function (table) {
    table.increments();

    table.string('title_shit').notNullable();
    table.string('description').notNullable();

    table.string('bathroom_id').notNullable();
    table.string('user_id').notNullable();
    table.timestamps('data_shit');

    table.foreign('bathroom_id').references('userId').inTable('users');
    table.foreign('user_id').references('id').inTable('bathrooms');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('shits')
};
