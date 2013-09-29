describe("camel", function () {
  it("handles base cases", function () {
    expect(camel("")).to.equal("");
    expect(camel("single")).to.equal("single");
  });
});
