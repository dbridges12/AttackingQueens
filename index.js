var AttackingQueens = require('./src/attackingQueens');

// Create the AttackingQueens Object //
var Game1 = new AttackingQueens();

// Build a game board passing the length of the side //
var newBoard = Game1.buildBoard(8);

// Add game pieces - will behave like a queen in chess //
// row,column,board,piecename,piececolor //

if (!Game1.setPiece(4,5,newBoard,'Queen','Red')) {
    console.log ('Cannot start the game - invalid piece location 1');
    return;
}

if (!Game1.setPiece(1,3,newBoard,'Queen','Black')) {
    console.log ('Cannot start the game - invalid piece location 2');
    return;
}

if (!Game1.setPiece(3,7,newBoard,'Queen','Red')) {
    console.log ('Cannot start the game - invalid piece location 2');
    return;
}

if (!Game1.setPiece(5,2,newBoard,'Queen','Black')) {
    console.log ('Cannot start the game - invalid piece location 2');
    return;
}

// Finally have it check if any of the queens are under attack //
var isUnderAttack = Game1.checkForAttack(newBoard);

console.log(isUnderAttack);
