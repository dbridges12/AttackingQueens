function AttackingQueens() {
    'use strict';
}

AttackingQueens.prototype.buildBoard = function(size){
    // create main array //
    var chessboard=[];

    for (var i=0; i<size; i++){
        // create column array //
        var cols = [];

        for (var j=0; j<size;j++) {
            cols[j] = ''; // init each location with empty string
        }

        // add each column array to the main array
        chessboard.push(cols);
    }
    return chessboard;
};

AttackingQueens.prototype.setPiece = function(rowVal,colVal,board,piece,color) {
    // build the piece object //
    var pieceObj = {piece:piece, color:color};

    // make sure the row and col values fit on the board //
    if (rowVal > 0 && rowVal < board.length && colVal > 0 && colVal < board[0].length) {
        board[rowVal-1][colVal-1] = pieceObj;
        return true;
    } else {
        console.log('Invalid board location: ' + rowVal + ',' + colVal);
        return false;
    }
};

AttackingQueens.prototype.showBoard = function(board) {
    var rowSize = board.length - 1,
        colSize = board[0].length - 1,
        cb2 = [];

    for (var rowNum = 0; rowNum < rowSize; rowNum++) {
        var cols=[];
        for (var colNum = 0; colNum < colSize; colNum++) {
            var locVal = board[rowNum][colNum];
            if (locVal !== '') {
                cols[colNum] = 'Q';
            } else {
                cols[colNum] = '-'
            }
        }
        cb2.push(cols);
    }

    console.log(cb2);
};

AttackingQueens.prototype.checkForAttack = function(board) {
    var isUnderAttack = false,
        rowSize = board.length - 1,
        colSize = board[0].length -1,
        pieceColor, newLoc;

    this.showBoard(board);

    for (var rowNum = 0; rowNum < rowSize; rowNum++) {
        for (var colNum = 0; colNum < colSize; colNum++) {
            var locVal = board[rowNum][colNum];
            if (locVal !== '') {  // we've found something!
                pieceColor = locVal.color;  // get the color of the piece

                // search the row //
                for (var colNum2 = 0; colNum2 < colSize; colNum2++){
                    newLoc = board[rowNum][colNum2];
                    if (newLoc !== '' && colNum2 !== colNum) {
                        if (pieceColor !== newLoc.color) {  // found an attack //
                            return 'true - same row';
                        }
                    }
                }
                // search the col //
                for (var rowNum2 = 0; rowNum2 < rowSize; rowNum2++){
                    newLoc = board[rowNum2][colNum];
                    if (newLoc !== '' && rowNum2 !== rowNum) {
                        if (pieceColor !== newLoc.color) {  // found an attack //
                            return 'true - same col';
                        }
                    }
                }

                // check the top left diagonal //
                var topLeftCol = colNum, topLeftRow = rowNum;
                while (topLeftCol > 0 && topLeftRow > 0) {
                    newLoc = board[topLeftRow - 1][topLeftCol - 1];  // subtract 1 to row and subtract 1 from col
                    if(newLoc !== '') {
                        if (pieceColor !== newLoc.color) {  // found an attack //
                            return 'true - top left diag';
                        }
                    }
                    topLeftCol--;
                    topLeftRow--;
                }

                // check the top right diagonal //
                var topRightCol = colNum, topRightRow = rowNum;
                while (topRightCol < colSize && topRightRow > 0) {
                    newLoc = board[topRightRow - 1][topRightCol + 1];  // add 1 to col and subtract 1 from row
                    if(newLoc !== '') {
                        if (pieceColor !== newLoc.color) {  // found an attack //
                            return 'true - top right diag';
                        }
                    }
                    topRightCol++;
                    topRightRow--;
                }

                // check the bottom left diagonal //
                var botLeftCol = colNum, botLeftRow = rowNum;
                while (botLeftCol > 0 && botLeftRow < rowSize) {
                    newLoc = board[botLeftRow + 1][botLeftCol - 1];  // add 1 to row and subtract 1 from col
                    if(newLoc !== '') {
                        if (pieceColor !== newLoc.color) {  // found an attack //
                            return 'true - bottom left diag';
                        }
                    }
                    botLeftCol--;
                    botLeftRow++;
                }

                // check the bottom right diagonal //
                var botRightCol = colNum, botRightRow = rowNum;
                while (botRightCol < colSize && botRightRow < rowSize) {
                    newLoc = board[botRightRow + 1][botRightCol + 1];  // add 1 to column and row
                    if(newLoc !== '') {
                        if (pieceColor !== newLoc.color) {  // found an attack //
                            return 'true - bottom right diag';
                        }
                    }
                    botRightCol++;
                    botRightRow++;
                }
            }
        }
    }

    return isUnderAttack + ' - nothing under attack';
};

module.exports = AttackingQueens;
