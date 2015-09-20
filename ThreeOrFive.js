'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['number'], function (error, result) {
  var num = parseInt(result['number']);
  if (num % 3 === 0 && num %  5 === 0) { // if number is divisible by 3 & 5
    console.log(num + ' is divisible by 3 and 5');
  } else {
    if (num % 3 === 0) {  // if number is divisible by 3
      console.log(num + ' is divisible by 3');
    } else {
      if (num % 5 === 0) { // if number is divisible by 5
        console.log(num + ' is divisible by 5');
      } else {
        console.log(num);
      }
    }
  }
});

