exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("clients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("clients").insert([
        { username: "Carmen", password: "user1" },
        { username: "Benjamin", password: "user2" },
        { username: "Laura", password: "user3" }
      ]);
    });
};
