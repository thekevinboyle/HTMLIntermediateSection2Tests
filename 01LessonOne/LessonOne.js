module.exports = function() {

  this.returnTrue = function () {
    return true;
  };

  this.returnFalse = function() {
    return false;
  };

  this.greaterThan = function (big, small) {
    if (big > small) {
      return true;
    } else if (big < small ) {
      return false;
    }
  }; // return(big > small);


  // should return true if the first argument is greater than the second argument
  // and return false if the first argument is less than the second argument


  this.lessThan = function (small, big) {
    if (small < big) {
      return true;

    } else if (small > big) {
      return false;
    }
  }; // return(small < big);

  // should return true if the first argument is less than the second argument
  // and return false if the first argument is greater than the second argument



  this.equalTo = function (a, b) {
    return ((a === b) && (a === b));
  };
  // should return true if the first argument is equal to the second argument
  // and should return true if the first argument is equal to the second argument

  this.notEqualTo = function (a, b) {
    return (a !== b);
  };
    // should return true if the first argument is not equal to the second argument
    // and should return false if the first argument is equal to the second argument

};
