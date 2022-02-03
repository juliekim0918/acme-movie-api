const { expect } = require("chai");

describe("my app", () => {
  describe("first tests", () => {
    it("foo equals to foo", () => {
      expect("foo").to.equal("foo");
    });
  });
});
