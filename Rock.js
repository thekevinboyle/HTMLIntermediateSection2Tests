'use strict';

var theGame = function (hand1, hand2) {
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
    return;

}



var prompt = require('prompt');

prompt.start()

prompt.get(['hand1', 'hand2'], function (error, result) {

  console.log('First Hand: ' + result.hand1);
  console.log('Second Hand: ' + result.hand2);

  console.log(theGame(result.hand1, result.hand2));

});

