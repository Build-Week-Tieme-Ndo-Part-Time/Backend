exports.up = function(knex) {
<<<<<<< HEAD
  return knex.schema.createTable("loan", loan => {
    loan.increments();

    loan
      .integer("client_id")
      // .references("newClients.id")
      // .inTable("newClients")
      .notNullable();

    loan.integer("Orignal Loan Amount").notNullable();

    loan.integer("Amount Owed").notNullable();
  });
=======
  
>>>>>>> 18ec2f4b0bc12126ae26fb1d14daefd551ea25b8
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("loan");
};
