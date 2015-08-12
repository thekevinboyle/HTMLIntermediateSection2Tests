module.exports = function() {

  this.whichSpecies = function (character) {
    if (character === "scooby") {
        return "dog";
    } else if (character === "garfield") {
        return "cat";
    } else if (character === "nemo") {
        return "fish";
    } else {
        return false;
    }
  }
}
