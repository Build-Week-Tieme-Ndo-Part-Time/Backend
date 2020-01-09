exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("loan")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("loan").insert([
        { client_id: "1" ,
         "Orignal Loan Amount": "1000",
         "Amount Owed": "500" 
      }
      ]);
    });
};
