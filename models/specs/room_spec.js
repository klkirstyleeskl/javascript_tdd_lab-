const assert = require('assert');
const Room = require('../room');

describe('Room', function() {
  let room;
  beforeEach(function() {
    room = new Room(1000, 0)
  });
  it('should have an area', function() {
    const actual = room.area;
    assert.strictEqual(actual,1000)
  });
  it('should not start painted', function() {
    const actual = room.area_painted;
    assert.strictEqual(actual, 0)
  });

  
})
