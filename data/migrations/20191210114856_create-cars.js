
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments()
        table.string('VIN')
        table.string('make')
        table.string('model')
        table.integer('mileage')
        table.string('transmission')
        table.string('title')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
