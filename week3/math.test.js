const assert = require('assert');
const math = require("./math")

describe('Validating math functions', () => {
  it('shoulr return 2 when the value is 1 + 1', () => {
    assert.equal(math.add(1, 1), 2)
  })
})
