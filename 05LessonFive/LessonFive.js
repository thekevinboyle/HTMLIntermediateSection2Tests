module.exports = function() {

  this.loopIt = function () {
    // should return an array with numbers 0 - 99
    var arr = [];

    for(var i = 0; i < 100; i++){
      arr.push(i);
    }
    return arr;

  };
  this.onlyEvens = function () {
    // should return an array with all even numbers between 1 - 99
    var arrEven = [];

    for( i = 2; i < 100; i = i + 2 ){
      arrEven.push(i);
    }
    return arrEven;

  };

  this.fizzBuzz = function () {
    // should return an array of numbers between 0 - 99 where the numbers
    // divisible by 3 are replaced by the string "fizz", numbers divisible by 5
    // are replaced by the string "buzz", and the numbers divisble by both 3 and
    // 5 are replaced by fizzbuzz
    var arrFB = [];

    for(i = 0; i < 100; i++){

      var fb = "fizzbuzz";
      var f =  "fizz";
      var b = "buzz";

      if(i % 3 === 0 && i % 5 === 0){
        arrFB.push(fb);

      } else if (i % 3 === 0){
        arrFB.push(f);

      } else if (i % 5 === 0){
        arrFB.push(b);

      } else {

      arrFB.push(i);

      }

    }
    return arrFB;
  };

};

