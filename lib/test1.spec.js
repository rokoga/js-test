const Test1 = require("../src/Test1");
const expect = require("chai").expect;

describe("Test1", () => {
  it("Should be a function", () => {
    expect(Test1).to.be.a("function");
  });

  describe("Return of function", () => {
    it("It has to be ", done => {
      Test1(data => {
        try {
          expect(
            data.name +
              " have " +
              data.age +
              " years old " +
              "and likes " +
              data.like
          ).to.equal("John have 31 years old and likes guitar");
          done();
        } catch (e) {
          done(e);
        }
      });
    });
  });
});
