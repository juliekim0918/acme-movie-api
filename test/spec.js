const mocha = require("mocha");
const { expect } = require("chai");

describe("my app", () => {
  describe("first tests", () => {
    it("foo equals to foo", () => {
      expect("foo").to.equal("foo");
    });
    it("bar equals to bar", () => {
      expect("bar").to.equal("bar");
    });
  });
});
