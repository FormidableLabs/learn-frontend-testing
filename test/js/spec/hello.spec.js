describe("hello", function () {
  it("should say hello", function () {
    expect(hello("World"))
      .to.be.a("string").and
      .to.equal("Hello World!");
  });
});
