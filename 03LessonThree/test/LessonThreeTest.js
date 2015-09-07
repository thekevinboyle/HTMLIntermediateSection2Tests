var assert = require('assert');
var LessonThree = require('../LessonThree');

describe('LessonThree', function() {
  var lessonThree = new LessonThree();

  describe('#buildArray()', function () {
    it('should add each item (first, second, third) into an array in that order', function () {
      assert.deepEqual(lessonThree.buildArray('a', 'b', 'c'), ['a', 'b', 'c']);
      assert.deepEqual(lessonThree.buildArray('d', 'e', 'f'), ['d', 'e', 'f']);
    });
  });

  describe('#returnThirdItem()', function () {
    it('should return the third item in the array', function () {
      assert.deepEqual(lessonThree.returnThirdItem(['a', 'b', 'c']), 'c');
      assert.deepEqual(lessonThree.returnThirdItem(['d', 'e', 'f']), 'f');
    });
  });

  describe('#setFirstItem()', function () {
    it('should set the first item in the array with newFirstItem', function () {
      assert.deepEqual(lessonThree.setFirstItem(['a', 'b', 'c'], 'g'), ['g', 'b', 'c']);
      assert.deepEqual(lessonThree.setFirstItem(['d', 'e', 'f'], 'h'), ['h', 'e', 'f']);
    });
  });

  describe('#returnCenterItem()', function () {
    it('returns the "center" item in a 5 x 5 array', function () {
      var arr = [
        [1, 2, 1, 4, 5],
        [1, 2, 2, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 4, 4, 5],
        [1, 2, 5, 4, 5]
      ];
      assert.deepEqual(lessonThree.returnCenterItem(arr), 3);
    });
  });
});