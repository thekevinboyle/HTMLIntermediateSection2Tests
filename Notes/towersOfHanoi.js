
'use strict';

var prompt = require('prompt');
prompt.start();

var towers = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printTowers() {
  console.log("a: " + towers.a);
  console.log("b: " + towers.b);
  console.log("c: " + towers.c);
}

function movePiece(start, finish) {
  // takes the block popped off of the starting tower and pushes to finish
  towers[finish].push(towers[start].pop());
}

function isLegal(start, finish) {
  // get the last indicies of your start and finish towers
  var start_last_block_idx = towers[start].length - 1;
  var finish_last_block_idx = towers[finish].length - 1;

  // this will give us the block at the end of the start stack
  var movingBlock = towers[start][start_last_block_idx];

  // if the finish stack is empty, this will be undefined, otherwise it will
  // give us the block at the last index of the finish stack
  var comparingBlock = towers[finish][finish_last_block_idx];

  // compare the blocks
  if (movingBlock < comparingBlock || !comparingBlock) {
    // if the moving block is less than the block it's going to stack on
    // or if the finish stack is empty (hence the comparing block would be undefined)
    // remember '!' in front of a value will give the opposite "truthiness" value
    return true;
  }

  // otherwise return false. It is not a legal move
  console.log ("Not a Legal Move");
  return false;
}

function gameOver() {
  if (towers['b'].length === 4 || towers['c'].length === 4) {
    console.log('You Won!!!');
    return true;
  }
  return false;
}

function getPrompt() {
  printTowers();
  prompt.get(['start', 'finish'], function (error, result) {
    if (isLegal(result['start'], result['finish'])) {
      movePiece(result['start'], result['finish']);
    }

    if (!gameOver()) {
      getPrompt();
    }
  });
}

getPrompt();

