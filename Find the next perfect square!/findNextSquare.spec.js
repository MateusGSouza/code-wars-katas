const chai = require("chai");
const assert = chai.assert;
const findNextSquare = require("./findNextSquare.js")

describe("findNextSquare", function() {
  it("should return the next square for perfect squares", function() {
    assert.strictEqual(findNextSquare(121), 144, "Wrong output for 121");
    assert.strictEqual(findNextSquare(625), 676, "Wrong output for 625");
    assert.strictEqual(findNextSquare(319225), 320356, "Wrong output for 319225");
    assert.strictEqual(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });
  
  it("should return -1 for numbers which aren't perfect squares", function() {
    assert.strictEqual(findNextSquare(155), -1, "Wrong output for 155");
    assert.strictEqual(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});