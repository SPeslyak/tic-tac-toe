class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.winner = null;
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex] === null) {
            if(this.currentPlayer === `x`) {
                this.gameField[rowIndex][columnIndex] = this.currentPlayer;
                this.currentPlayer = `o`;
            } else
            if(this.currentPlayer === `o`) {
                this.gameField[rowIndex][columnIndex] = this.currentPlayer;
                this.currentPlayer = `x`;
            }
        }
    }

    isFinished() {
        return (this.isDraw() || this.getWinner()) !== null ? true : false;
    }

    getWinner() {
        for(let i = 0; i < this.gameField.length; i++) {
            if(this.gameField[i].every((item) => item === `x`)) {
                this.winner = `x`;
            } else
            if(this.gameField[i].every((item) => item === `o`)) {
                this.winner = `o`;
            } else
            if(this.gameField[0][i] === `x` && this.gameField[1][i] === `x` && this.gameField[2][i] === `x`) {
                this.winner = `x`;
            } else
            if(this.gameField[0][i] === `o` && this.gameField[1][i] === `o` && this.gameField[2][i] === `o`) {
                this.winner = `o`;
            }
        }
        if(this.gameField[0][0] === `x` && this.gameField[1][1] === `x` && this.gameField[2][2] === `x`) {
            this.winner = `x`;
        } else 
        if(this.gameField[0][0] === `o` && this.gameField[1][1] === `o` && this.gameField[2][2] === `o`) {
            this.winner = `o`;
        } else
        if(this.gameField[0][2] === `x` && this.gameField[1][1] === `x` && this.gameField[2][0] === `x`) {
            this.winner = `x`;
        } else
        if(this.gameField[0][2] === `o` && this.gameField[1][1] === `o` && this.gameField[2][0] === `o`) {
            this.winner = `o`;
        }
        return this.winner;
    }

    noMoreTurns() {
        return (this.gameField.flat().find((i) => i === null)) === undefined ? true : false;
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner()) === null ? true : false; 
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
