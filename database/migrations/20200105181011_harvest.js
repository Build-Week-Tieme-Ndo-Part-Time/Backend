exports.up = function(knex) {
  return knex.schema.createTable("harvest", harvest => {
    harvest.increments();

    harvest
      .integer("client_id")
      // .references("newClients.id")
      // .inTable("newClients")
      .notNullable();

    harvest.integer("goal").notNullable();

    harvest.integer("harvest amount");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("harvest");
};
