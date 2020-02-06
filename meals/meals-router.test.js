const request = require("supertest");
const db = require("../database/dbConfig.js");
const meal = require("../api/server");

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
});