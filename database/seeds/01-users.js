exports.seed = function(knex) {
    return knex("users").then(function() {
      return knex("users").insert([
        { id: 20, username: "Javis", password: "pass" },
        { id: 21, username: "Ben", password: "pass" },
        { id: 22, username: "Jess", password: "pass" }
      ]);
    });
  };