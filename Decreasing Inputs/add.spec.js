const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const add = require("./add.js")

describe("Sample tests", () => {
  it("add() = 0", () => {
    assert.strictEqual(add(), 0);
  });
  
  it("add(100, 200, 300) = 300", () => {
    assert.strictEqual(add(100, 200, 300), 300);
  });
  
  it("add(2) = 2", () => {
    assert.strictEqual(add(2), 2);
  });
  
  it("add(4, -3, -2) = 2", () => {
    assert.strictEqual(add(4, -3, -2), 2);
  });
  
  it("add(-1, -2, -3, -4) = -4", () => {
    assert.strictEqual(add(-1, -2, -3, -4), -4);
  });
});
