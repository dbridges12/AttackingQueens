var AttackingQueens = require('./src/attackingQueens');


var Game1 = new AttackingQueens();

var newBoard = Game1.buildBoard(8);

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

var isUnderAttack = Game1.checkForAttack(newBoard);

console.log(isUnderAttack);
