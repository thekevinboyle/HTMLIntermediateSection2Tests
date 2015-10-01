'use strict';

var prompt = require ('prompt');
prompt.start();


var stacks = {
  a: [4,3,2,1],
  b: [],
  c: []
};

function initGame() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function moveBlock (grab, place) {
  stacks[place].push(stacks[grab].pop())
}

function moveBlock(grab, place) {
  stacks[place].push(stacks[grab].pop());
}

function isMoveValid() {

  var grab_top_most_block_id = stacks[grab].length - 1;
  var place_top_most_block_id = stacks[place].length - 1;

  var captureBlock = stacks[grab][grab_top_most_block_id];
  var comparingBlock = stacks[place][place_top_most_block_id];

  if (captureBlock < comparingBlock || !comparingBlock) {
    return true;
  }

  console.log("Invalid Move");
  return false;
}

function isGameOver() {

  if (stacks['b'].length === 4 || stacks['c'].length === 4) {
    console.log("You Win!");
    return true;
  }

  return false;

}

function getPrompt() {
  initGame();
  prompt.get(['grab', 'place'], function(error, result)) {
    if(isMoveValid(result['grab'], result['place'])) {
      moveBlock(result['grab'], result['place']);
    }
    if(!isGameOver());
      getPrompt();

    }
  };

getPrompt();

