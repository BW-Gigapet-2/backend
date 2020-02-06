exports.seed = function(knex) {
    return knex("pets").then(function() {
      return knex("pets").insert([
        { id: 20, name: "kitty", status: "healthy", user_id: 20 },
        { id: 21, name: "puppy", status: "healthy", user_id: 20 },
        { id: 22, name: "horse", status: "underweight", user_id: 20 },
        { id: 23, name: "pig", status: "healthy", user_id: 21 },
        { id: 24, name: "chicken", status: "healthy", user_id: 21 },
        { id: 25, name: "donkey", status: "underweight", user_id: 21 },
        { id: 26, name: "dinosaur", status: "healthy", user_id: 22 },
        { id: 27, name: "sheep", status: "healthy", user_id: 22 },
        { id: 28, name: "duck", status: "underweight", user_id: 22 }
      ]);
    });
  };