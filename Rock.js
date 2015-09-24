/* jshint node: true */
'use strict';

var compareHands = function (hand1, hand2) {

  if (hand1 === hand2) { // Its a tie
    return "Tie";
  }

  if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'Player 1 wins'; // rock beats scissors
    }
    return 'Player 2 wins'; // hand1 === paper
  }

  if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'Player 1 wins'; // paper beats rock
    }
    return 'Player 2 wins'; // hand1 === scissors
  }

  if (hand1 === 'scissors') {
    if (hand2 === 'paper') {
      return 'Player 1 wins'; // scissors beats paper
    }
    return 'Player 2 wins'; // hand1 === rock
  }
};

function acceptableInput(hand) {
  if (hand === 'rock' || hand === 'paper' || hand === 'scissors') {
    return true;
  }
  return false;
}

var prompt = require('prompt');

prompt.start();

prompt.get(['hand1', 'hand2'], function (error, result) {

  var lowerHand1 = result.hand1.toLowerCase();
  var lowerHand2 = result.hand2.toLowerCase();

  if (acceptableInput(lowerHand1) && acceptableInput(lowerHand2)) {
    console.log(compareHands(lowerHand1, lowerHand2));
  } else {
    console.log('Hey dummy! Its either "rock", "paper", or "scissors!"');
  }
});
