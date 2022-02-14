var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("returns correct value of 5!", () => {
      // setup
      const inputNumber = 5;
      const expectedResult = 120;
      //exercise
      const result = Calculate.factorial(inputNumber);
      //verify
      assert.equal(result, expectedResult);
    });
    it("returns correct value of 3!", () => {
      // setup
      const inputNumber = 3;
      const expectedResult = 6;
      //exercise
      const result = Calculate.factorial(inputNumber);
      //verify
      assert.equal(result, expectedResult);
    });
  });
});
