exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("harvest")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("harvest").insert([
        {
          client_id: "1",
          goal: "100",
          "harvest amount": "200"
        }
      ]);
    });
};
