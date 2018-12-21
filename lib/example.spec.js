const Example = require("../src/Example");
const expect = require("chai").expect;

describe("Example", () => {
  it("Should be a function", () => {
    expect(Example).to.be.a("function");
  });

  describe("Return of function", () => {
    it("It has to be string", () => {
      expect(Example()).to.be.a("string");
    });

    it("It has to be 'hello world'", () => {
      expect(Example()).to.equal("hello world");
    });
  });
});
