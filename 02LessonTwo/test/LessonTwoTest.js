var assert = require('assert');
var LessonTwo = require('../LessonTwo');

describe('LessonTwo', function() {
  var lessonTwo = new LessonTwo();

  describe('#whichSpecies()', function () {
    it('should return "dog" when character is scooby', function () {
      assert.deepEqual(lessonTwo.whichSpecies('scooby'), 'dog');
    });
    it('should return "cat" when character is garfield', function () {
      assert.deepEqual(lessonTwo.whichSpecies('garfield'), 'cat');
    });
    it('should return "fish" when character is nemo', function () {
      assert.deepEqual(lessonTwo.whichSpecies('nemo'), 'fish');
    });
    it('should return false if character is anything else', function () {
      assert.deepEqual(lessonTwo.whichSpecies('stitch'), false);
    });
  });

});