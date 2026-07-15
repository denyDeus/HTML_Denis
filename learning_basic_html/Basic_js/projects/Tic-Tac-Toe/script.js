// Player Factory
const Player = (name, marker) => {
    return {
        name,
        marker
    };
};

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
            ) {
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

        if (gameOver) {
            console.log("The game is over!");
            return;
        }

        const success = Gameboard.placeMark(index, currentPlayer.marker);

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

// DisplayController
const DisplayController = (() => {

    const gameboardDiv = document.querySelector("#gameboard");

    for (let i = 0; i < 9; i++) {

        const square = document.createElement("div");

        square.dataset.index = i;

        square.addEventListener("click", () => {

            GameController.playRound(Number(square.dataset.index));

            render();

        });

        gameboardDiv.appendChild(square);

    }

    const boardsquares = document.querySelectorAll("#gameboard div");

    const render = () => {

        const board = Gameboard.getBoard();

        for (let i = 0; i < board.length; i++) {

            squares[i].textContent = board[i];

        }

    };

    render();

})();