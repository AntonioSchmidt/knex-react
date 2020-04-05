
exports.up = function(knex) {
  return knex.schema.createTable('products', function (table) {
      table.increments('id');
      table.string('name', 1000).notNullable();
      table.string('category', 1000).notNullable();
      table.string('dimensions', 1000).notNullable();
      table.string('rank', 1000).notNullable();
      table.string('reference', 1000).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("products")
};
