const assert = require('assert');
const PaintCan = require('../paint_can');


describe('Paint Can', function(){
  let paintCan;
  beforeEach(function() {
    paintCan = new PaintCan(100)
  });
  it('should have a volume', function(){
    const actual = paintCan.volume;
    assert.strictEqual(actual, 100)
  });
});
