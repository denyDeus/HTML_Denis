// Player Factory
const Player = (name, marker) => {
    return {
        name,
        marker
    };
};

const player1 = Player("Denis", "X");
const player2 = Player("John", "O");

console.log(player1);
console.log(player2);

// Gameboard Module
const Gameboard = (() => {

    const board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const getBoard = () => board;

    const placeMark = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }

        return false;
    };

    const resetBoard = () => {
        board.fill("");
    };

    return {
        getBoard,
        placeMark,
        resetBoard
    };

})();

console.log(Gameboard.getBoard());

Gameboard.placeMark(0, "X");

console.log(Gameboard.getBoard());

Gameboard.resetBoard();

console.log(Gameboard.getBoard());

// GameController Module
const GameController = (() => {

    const players = [
        Player("Denis", "X"),
        Player("John", "O")
    ];

    let gameOver = false;

    let currentPlayer = players[0];

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    const getCurrentPlayer = () => currentPlayer;

    const switchPlayerTurn = () => {
        currentPlayer =
            currentPlayer === players[0]
                ? players[1]
                : players[0];
    };

    const checkWinner = () => {
        const board = Gameboard.getBoard();

        for (const combination of winningCombinations) {

            const [a, b, c] = combination;

            if (
                board[a] !== "" &&
                board[a] === board[b] &&
                board[a] === board[c]
            ){
                return true;
            }

        }

        return false;

    };

    const checkTie = () => {
        const board = Gameboard.getBoard();

        return !board.includes("")

    };

    const playRound = (index) => {

        const success = Gameboard.placeMark(index, currentPlayer.marker);

        if (gameOver) {
            console.log("The game is over!");
            return;
        }

        if (!success) {
            console.log("That square is already taken!");
            return;
        }

        console.log(Gameboard.getBoard());

        if (checkWinner()) {
            gameOver = true;

            console.log(`${currentPlayer.name} wins!`);

            return;
        }

        if (checkTie()) {
            gameOver = true;
            console.log("It's a tie!");
            return;
        }

        switchPlayerTurn();
    };

    return {
        getCurrentPlayer,
        switchPlayerTurn,
        playRound
    };

})();

GameController.playRound(0); // X
GameController.playRound(3); // O
GameController.playRound(1); // X
GameController.playRound(4); // O
GameController.playRound(2); // X

GameController.playRound(8);