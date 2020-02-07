const request = require("supertest");
const db = require("../database/dbConfig.js");
const user = require("../api/server");

const User = require('./users-model');


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

///////////////////////////////////////////////

describe('insert()', function() {
  //runs before test
beforeEach(async () => {
  await db('users').truncate();
})

it('adds the new char to db', async function() {
  await User.add({username: 'ben', password: 117});
  
const user = await db('users');
expect(user).toHaveLength(1);
  })
})





});

