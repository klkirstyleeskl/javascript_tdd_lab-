const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can')

describe('Decorator', function() {
  let decorator;
  beforeEach(function() {
    decorator = new Decorator([])
    paint_can = new PaintCan(100)
  });
  
  it('should have stock', function() {
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [ ]);
  });
  it('should add paint to stock', function() {

  })

});
