
/* jslint node: true */
'use strict';

// var prompt = require('prompt');
// prompt.start();
//
// function getPrompt() {
//   prompt.get(['start', 'finish'], function (error, result) {
//
//   });
// }
//
// getPrompt();
  function projectEuler02(theMax){
    var   current = 1,
      previous = 0,
      solution = 0,
      capture;

    while(current < theMax){

      capture = current;
      current = current + previous;
      previous = capture;

      if(current % 2 === 0){
        solution = solution + current;

      }
    }

    return solution;
  }

  console.log(projectEuler02(4000000));
