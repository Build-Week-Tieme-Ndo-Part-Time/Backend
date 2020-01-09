exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("newClient")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("newClient").insert([
        {
          "First Name": "Tina",
          "Last Name": "Lucas",
          "Village Name": "Greenville",
          "Orignal Loan Amount": "2000",
          "Loan Initiation Date": "12/25/2019 4pm",
          "Loan Due Date": "01/26/2020",
          "Amount Owed": "1500",
          "Harvest Goal": "100",
          "Harvest Amount": "200"
        }
      ]);
    });
};
