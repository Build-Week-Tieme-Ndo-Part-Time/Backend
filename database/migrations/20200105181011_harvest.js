exports.up = function(knex) {
<<<<<<< HEAD
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
=======
  
        
    

  
>>>>>>> 18ec2f4b0bc12126ae26fb1d14daefd551ea25b8
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("harvest");
};
