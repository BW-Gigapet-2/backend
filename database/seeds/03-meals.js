exports.seed = function(knex) {
    return knex("meals").then(function() {
      return knex("meals").insert([
        {
          id: 20,
          name: "pizza",
          date: 11 / 11 / 2020,
          servings: 1,
          category: "pizza",
          pet_id: 20
        },
        {
          id: 21,
          name: "turkey sandwich",
          date: 10 / 10 / 2020,
          servings: 3,
          category: "sandwich",
          pet_id: 20
        },
        {
          id: 22,
          name: "pineapple",
          date: 12 / 13 / 2020,
          servings: 11,
          category: "fruit",
          pet_id: 20
        },
        {
          id: 23,
          name: "pizza",
          date: 11 / 11 / 2020,
          servings: 1,
          category: "pizza",
          pet_id: 21
        },
        {
          id: 24,
          name: "turkey sandwich",
          date: 10 / 10 / 2020,
          servings: 3,
          category: "sandwich",
          pet_id: 21
        },
        {
          id: 25,
          name: "pineapple",
          date: 12 / 13 / 2020,
          servings: 11,
          category: "fruit",
          pet_id: 21
        },
        {
          id: 26,
          name: "pizza",
          date: 11 / 11 / 2020,
          servings: 1,
          category: "pizza",
          pet_id: 22
        },
        {
          id: 27,
          name: "turkey sandwich",
          date: 10 / 10 / 2020,
          servings: 3,
          category: "sandwich",
          pet_id: 22
        },
        {
          id: 28,
          name: "pineapple",
          date: 12 / 13 / 2020,
          servings: 11,
          category: "fruit",
          pet_id: 22
        }
      ]);
    });
  };