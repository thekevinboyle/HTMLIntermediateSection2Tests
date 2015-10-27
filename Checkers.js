

function CheckerClass(color, position) {
  this.color = color;
  this.position = position;
  this.movePosition = function(newPosition) {
    this.position = newPosition;
  }
}

function BoardClass() {

  this.grid = [];
  this.createGrid();
}

this.placeCheckersOnGrid = function() {
  this.resetGrid();
  for (var i = 0; i < this.checkersArray.length; i++) {
    var checker = this.checkersArray[i];
    var checkerPos = checker.position;
    this.grid[checkerPos[0]][checkerPos[1]] = checker;
  }

}

this.selectChecker = function(row, column) {
  var selectedChecker = this.grid[row][column];
  return selectedChecker;

}
