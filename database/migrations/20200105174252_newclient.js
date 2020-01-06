
exports.up = function(knex) {
  return knex.schema.createTable("newClients", newClient => {
    newClient.increments();

    newClient
        .string("First Name", 255)
        .notNullable();
      
    newClient
        .string("Last Name", 255)
        .notNullable()

    newClient
        .string("Village Name", 255)
        .notNullable()
        
    newClient
        .integer("Loan Amount")
        .notNullable()
    
    newClient
        .datetime("Loan Initiation Date")
        .notNullable()

    newClient
        .date("Due Date")
        
      


    
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("newClients");
  
};
