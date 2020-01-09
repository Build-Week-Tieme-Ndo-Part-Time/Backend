exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("newClients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("newClients").insert([
        {
          "First Name": "Carmen",
          "Last Name": "Lucy",
          "Village Name": "Anderson",
          "Loan Amount": "200",
          "Loan Initiation Date": "12/20/2019 4pm",
          "Due Date": "01/20/2020"
        }
      ]);
    });
};
