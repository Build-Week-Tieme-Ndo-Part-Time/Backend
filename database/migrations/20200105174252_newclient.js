
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
        .integer("Orignal Loan Amount")
        .notNullable()
    
    newClient
        .datetime("Loan Initiation Date")
        .notNullable()

    newClient
        .date("Loan Due Date")

    newClient    
        .integer("Amount Owed")
        .notNullable()
    
    newClient
        .integer("Harvest Goal")
        .notNullable()

    newClient
        .integer("Harvest Amount")

        


    
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("newClients");
  
};
