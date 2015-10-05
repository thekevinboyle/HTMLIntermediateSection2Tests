
/* jslint node: true */
'use strict';

var prompt = require('prompt');
prompt.start();

function getPrompt() {
  prompt.get(['start', 'finish'], function (error, result) {

  });
}

// getPrompt();
function printBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  console.log(board[3]);
}

// hard guess and solution
//
var solution = 'ghab'; // [g,h,a,b]
var guess = 'abcb'; // [a,b,c,b]

function generateHints(solution, guess) {
  var solutionArray = solution.split(' ');
  var guessArray = guess.split('');
  var correctLettersLocations = 0;

  // write a loop that loops over each item in solutionArray

  for(var i=0;i < solutionArray.length; i++ ){
    // if solution at index[i] is = guessArray[i]
    // then increment correctLetterLocations
    // and cancel out the solutionArray at that index
    //
    if(solutionArray[i] === guessArray[i]){
      correctLettersLocations++;
      solutionArray[i] = null;
    }
  }

  var correctLetters = 0;

  for (i = 0; i < solutionArray.length; i++){
    // if solutionArray contains guessArray at index i, increment correctLetters
    // and also cancel out index i of solutionArray
    var targetIndex = solutionArray.indexOf(guessArray[i]); // this captures the index just in case it exists

    if(targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
    return correctLetters + " - " + correctLettersLocations;
  }
}
