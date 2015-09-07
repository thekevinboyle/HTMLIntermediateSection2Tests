var assert = require('assert');
var LessonOne = require('../LessonOne');

describe('LessonOne', function() {
  var lessonOne = new LessonOne();

  describe('#returnTrue()', function () {
    it('should return true', function () {
      assert.deepEqual(lessonOne.returnTrue(), true);
    });
  });

  describe('#returnFalse()', function () {
    it('should return false', function () {
      assert.deepEqual(lessonOne.returnFalse(), false);
    });
  });

  describe('#greaterThan()', function () {
    it('should return true if the first argument is greater than the second argument', function () {
      assert.deepEqual(lessonOne.greaterThan(10, 4), true);
    });
    it('should return false if the first argument is less than the second argument', function () {
      assert.deepEqual(lessonOne.greaterThan(4, 10), false);
    });
  });

  describe('#lessThan()', function () {
    it('should return true if the first argument is less than the second argument', function () {
      assert.deepEqual(lessonOne.lessThan(3, 5), true);
    });
    it('should return false if the first argument is greater than the second argument', function () {
      assert.deepEqual(lessonOne.lessThan(6, 3), false);
    });
  });

  describe('#equalTo()', function () {
    it('should return true if the first argument is equal to the second argument', function () {
      assert.deepEqual(lessonOne.deepEqualTo(6, 6), true);
    });
    it('should return false if the first argument is not equal to the second argument', function () {
      assert.deepEqual(lessonOne.deepEqualTo(6, 7), false);
    });
    it('should return false if not using ===', function () {
      assert.deepEqual(lessonOne.deepEqualTo(6, '6'), false);
    });
  });

  describe('#notEqualTo()', function () {
    it('should return false if the first argument is equal to the second argument', function () {
      assert.deepEqual(lessonOne.notEqualTo(6, 6), false);
    });
    it('should return true if the first argument is not equal to the second argument', function () {
      assert.deepEqual(lessonOne.notEqualTo(6, 7), true);
    });
    it('should return true if not using ===', function () {
      assert.deepEqual(lessonOne.notEqualTo(6, '6'), true);
    });
  });
});