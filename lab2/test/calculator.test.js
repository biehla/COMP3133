var assert = require('assert')
var calculator = require('../app/calculator')

describe("Calculator", function() {
  describe("Add", function() {
    it("Should return 2 when adding 1 + 1", function() {
      assert.equal(calculator.add(1, 1), 2)
    })
    it("Should return 5 when adding 3 + 2", function() {
      assert.equal(calculator.add(2, 3), 5)
    })
  })

  describe("Subtract", function() {
    it("Should return 0 when subtracting 1 - 1", function() {
      assert.equal(calculator.sub(1, 1), 0)
    })
    it("Should return -1 when subtracting 3 from 2", function() {
      assert.equal(calculator.sub(2, 3), -1)
    })
  })

  describe("Multiply", function() {
    it("Should return 1 when multiplying 1 * 1", function() {
      assert.equal(calculator.mul(1, 1), 1)
    })
    it("Should return 15 when multiplying 3 * 5", function() {
      assert.equal(calculator.mul(3, 5), 15)
    })
  })

  describe("Divide", function() {
    it("Should return 5 when dividing 15 / 3", function() {
      assert.equal(calculator.div(15, 3), 5)
    })
    it("Should return infinity when dividing 6/0", function() {
      assert.equal(calculator.div(6, 0), Infinity)
    })
  })
})
