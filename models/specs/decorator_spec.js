const assert = require('assert');
const Decorator = require('../decorator');

describe('Decorator', function() {
  let decorator;
  beforeEach(function() {
    decorator = new Decorator([])
  });
  it('should have stock', function() {
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [ ]);
  });

});
