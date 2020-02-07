const request = require("supertest");
const db = require("../database/dbConfig.js");
const user = require("../api/server");

const Pets = require('./pets-model');


describe("pets-router", function() {
  describe("GET /pets", function() {
    it("should get 401", function() {
      return request(user)
        .get("/api/pets")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });

///////////////////////////////////////////////

describe('insert()', function() {
  //runs before test
beforeEach(async () => {
  await db('pets').truncate();
})

it('adds the new pet', async function() {
  await Pets.addPet({name: 'kitty', status: 'healthy'});
                    //////////////////// user_id: 1
const pet = await db('pets');
expect(pet).toHaveLength(1);
  })
})

/////////////DELETE///////////////////////////////////

describe('delete', function() {
    //runs before test
  beforeEach(async () => {
    await db('pets').truncate();
  })
  
  it('adds the new pet', async function() {
    await Pets.removePet({name: 'kitty', status: 'healthy'});
    await Pets.removePet({name: 'turtle', status: 'healthy'});
                      //////////////////// user_id: 1
  const pet = await db('pets');
  expect(pet).toHaveLength(0);
    })
  })





});
