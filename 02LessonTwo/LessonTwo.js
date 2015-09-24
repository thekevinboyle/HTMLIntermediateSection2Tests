module.exports = function() {

  this.whichSpecies = function (character) {
    if (character === "scooby") {
      return "dog";

    } else if (character === "garfield") {
      return "cat";

    } else if (character === "nemo") {
      return "fish";

    }
    return false;
  }

  this.isEven = function (number) {
    // should return true is number is even (divisible by 2)
    return number % 2 === 0;

  };

};

