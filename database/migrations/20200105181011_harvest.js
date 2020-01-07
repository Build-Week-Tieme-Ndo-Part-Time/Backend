
exports.up = function(knex) {
  return knex.schema.createTable("harvest", harvest => {
      harvest.increments()

      harvest
        .foreign("client_id")
        .references("newClients.id")
        .notNullable()
      
      harvest
        .integer("goal")
        .notNullable()

      harvest
        .integer("harvest amount")
        
    

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("harvest");
  
};
