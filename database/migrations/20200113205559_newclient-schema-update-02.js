exports.up = function(knex) {
  return knex.schema.createTable("newClient", newClient => {
    newClient.increments();

    newClient.string("FirstName", 255).notNullable();

    newClient.string("LastName", 255).notNullable();

    newClient.string("VillageName", 255).notNullable();

    newClient.integer("OrignalLoan").notNullable();

    newClient.string("LoanInitiation", 255).notNullable();

    newClient.date("LoanDue");

    newClient.integer("AmountOwed").notNullable();

    newClient.integer("HarvestGoal").notNullable();

    newClient.integer("HarvestAmount");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("newClient");
};
