var assert = require("assert");
var LessonTwo = require('../LessonTwo');

describe('LessonTwo', function() {
  var lessonTwo = new LessonTwo();

  describe('#whichSpecies()', function () {
    it('should return "dog" when character is scooby', function () {
      assert.equal(lessonTwo.whichSpecies('scooby'), 'dog');
    });
    it('should return "cat" when character is garfield', function () {
      assert.equal(lessonTwo.whichSpecies('garfield'), 'cat');
    });
    it('should return "fish" when character is nemo', function () {
      assert.equal(lessonTwo.whichSpecies('nemo'), 'fish');
    });
    it('should return false if character is anything else', function () {
      assert.equal(lessonTwo.whichSpecies('stitch'), false);
    });
  });

});