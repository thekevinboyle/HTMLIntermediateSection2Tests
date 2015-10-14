
/* jslint node: true */
'use strict';


// Step 1.  Build the board and make it look pretty

var solution = 'ghab'; // [g,h,a,b]
var guess = 'abcd'; // [a,b,c,b]
var numTry = 0;

var board = [
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ']
];

function printBoard() {
  for(var i = 0; i < board.length; i++) {
    console.log(board[i].join(' '));
  }
}

// Step 2. Prompt the user

var prompt = require('prompt');
prompt.start();
var colors = require('colors/safe');

function getPrompt() {
  printBoard();
  prompt.get(['guess'], function (error, result) {

    var guess = result['guess'];
    if (checkSolution(guess) === true) {
      return false;
    }
    console.log('Guess: ' + guess);

    var hint = generateHints(solution, guess);
    // if (checkSolution(result.guess)) { return; }
    insertGuess(guess, hint);
    if (board.length === 10) {
      return false;
    }
    getPrompt();
  });
}

// Generate a random solution

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function generateSolution () {

  for(var i = 0; i < 4; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution = solution + letters[randomIndex];
  }
}


// Check for a win!

function checkSolution (guess) {
  if( guess === solution ) {
    console.log (guess + ' is the solution');
    return true;
  } else {
    return false;
  }
}

// Capture the number of guesses

function insertCode (guess, hints) {
  board.push(guess + ' ' + hints);
}



function insertGuess(guess) {
  var splitguess = guess.split('');
  var splitGuess = guess.split('');

  for(var x = 0; x < board[numTry].length; x++) {
    board[numTry][x] = splitGuess[x];
    console.log(splitguess[x]);
  }
  numTry++;
}


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
    return colors.red(correctLetters) + " - " + correctLettersLocations;
  }
}

generateSolution();
getPrompt();
