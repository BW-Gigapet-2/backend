const request = require("supertest");
const db = require("../database/dbConfig.js");
const user = require("../api/server");

describe("users-router", function() {
  describe("GET /users", function() {
    it("should get 401", function() {
      return request(user)
        .get("/api/users")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
});