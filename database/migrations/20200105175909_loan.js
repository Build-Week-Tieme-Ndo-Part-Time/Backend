
exports.up = function(knex) {
  return knex.schema.createTable("loan", loan => {
    loan.increments();

    loan 
        .foreign("client_id").references("newClients.id")
        .notNullable()
    
    loan
        .integer("Orignal Loan Amount")
        .notNullable()

    loan 
        .integer("Amount Owed")
        .notNullable()


    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExistes("loan");
};
