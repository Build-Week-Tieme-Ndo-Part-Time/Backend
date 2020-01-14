exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("newClient")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("newClient").insert([
        {
          FirstName: "Tina",
          LastName: "Lucas",
          VillageName: "Greenville",
          OrignalLoan: "2000",
          LoanInitiation: "12/25/2019 4pm",
          LoanDue: "01/26/2020",
          AmountOwed: "1500",
          HarvestGoal: "100",
          HarvestAmount: "200"
        }
      ]);
    });
};
