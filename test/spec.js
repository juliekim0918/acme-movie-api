const mocha = require("mocha");
const { expect } = require("chai");
const app = require("supertest")(require("../app"));
const {
  syncAndSeed,
  models: { Actor, Movie, Role },
} = require("../db");

beforeEach(() => syncAndSeed());
describe("my app", () => {
  describe("first tests", () => {
    it("foo equals to foo", () => {
      expect("foo").to.equal("foo");
    });
    it("bar equals to bar", () => {
      expect("bar").to.equal("bar");
    });
  });

  describe("my application", () => {
    it("GET / returns a success status", async () => {
      const response = await app.get("/");
      expect(response.status).to.equal(200);
    });
  });
});
