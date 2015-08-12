function LessonOne() {

  this.returnTrue = function () {
    return true;
  }

  this.returnFalse = function() {
    return false;
  }

  this.greaterThan = function (big, small) {
    return big > small;
  }

  this.lessThan = function (small, big) {
    return small < big;
  }

  this.equalTo = function (a, b) {
    return a === b
  }
}

module.exports = LessonOne;
