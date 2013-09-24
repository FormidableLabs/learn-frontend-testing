/*global hello */

// A simple function to test.
window.hello = function () {
  return "Hello World";
};

describe("Our first spec", function () {
  describe("Chai", function () {
    it("should say hello", function () {
      expect(hello())
        .to.be.a("string").and
        .to.equal("Hello World");
    });
  });
});
