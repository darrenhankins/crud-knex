
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', table => {
    table.increments();
    table.text('name');
    table.float('volume');
    table.text('type');
    table.text('brewery');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beers');

};
