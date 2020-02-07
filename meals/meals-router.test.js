const request = require("supertest");
const db = require("../database/dbConfig.js");
const meal = require("../api/server");

const Meals = require('./meals-model');

describe("meals-router", function() {
  describe("GET /meals", function() {
    it("should not get meals", function() {
      return request(meal)
        .get("/api/meals")
        .send({ username: "test", password: "test" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

/////////////////////////////////////////////////////
  describe('insert()', function() {
    //runs before test
  beforeEach(async () => {
    await db('meals').truncate();
  })
  
  it('adds the new meal', async function() {
    await Meals.addMeal({name: 'salad'});
    
  const meal = await db('meals');
  expect(meal).toHaveLength(1);
    })
  })


});