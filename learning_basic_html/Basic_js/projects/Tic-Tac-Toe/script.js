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

    let players = [];

    let gameOver = false;

    let winner = null;
    let winningSquares = [];

    let currentPlayer = players[0];

    const startGame = (playerOneName, playerTwoName) => {

        players = [
            Player(playerOneName, "X"),
            Player(playerTwoName, "O")
        ];

        currentPlayer = players[0];

        winner = null;
        winningSquares = [];

        gameOver = false;

        Gameboard.resetBoard();

    };

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
                return combination;
            }

        }

        return null;

    };

    const checkTie = () => {
        const board = Gameboard.getBoard();

        return !board.includes("")

    };

    const playRound = (index) => {

        if (!currentPlayer) {
            console.log("Start the game first!");
            return false;
        }

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

        const winningCombination = checkWinner();

        if (winningCombination) {

            winningSquares = winningCombination;
            winner = currentPlayer;

            gameOver = true;

            console.log(`${currentPlayer.name} wins!`);

            return true;
        }

        if (checkTie()) {
            winner = null;
            gameOver = true;

            console.log("It's a tie!");

            return;
        }

        switchPlayerTurn();

        return true;
    };

    const isGameOver = () => gameOver;

    const getWinner = () => winner;

    const getWinningSquares = () => winningSquares;

    const restartGame = () => {

        Gameboard.resetBoard();

        currentPlayer = players[0];

        winner = null;
        winningSquares = [];

        gameOver = false;

    };

    return {
        getCurrentPlayer,
        switchPlayerTurn,
        playRound,
        isGameOver,
        getWinner,
        getWinningSquares,
        restartGame,
        startGame
    };

})();

// DisplayController
const DisplayController = (() => {

    const gameboardDiv = document.querySelector("#gameboard");

    const refreshDisplay = () => {
        render();
        updateStatus();
    };

    for (let i = 0; i < 9; i++) {

        const square = document.createElement("div");

        square.dataset.index = i;

        square.addEventListener("click", () => {

           const movePlayed = GameController.playRound(
                Number(square.dataset.index)
           );

           if (movePlayed) {
            refreshDisplay();
           }

        });

        gameboardDiv.appendChild(square);

    }

    const boardSquares = document.querySelectorAll("#gameboard div");

    const render = () => {

        const board = Gameboard.getBoard();

        const winningSquares = GameController.getWinningSquares();

        for (let i = 0; i < board.length; i++) {

            const square = boardSquares[i];

            square.textContent = board[i];

            square.classList.remove("x", "o", "winner");

            if (board[i] === "X") {
                square.classList.add("x");
            }

            if (board[i] === "O") {
                square.classList.add("o");
            }

            if (winningSquares.includes(i)) {
                square.classList.add("winner");
            }

        }

    };

    const status = document.querySelector("#status");

    const updateStatus = () => {

        const currentPlayer = GameController.getCurrentPlayer();

        if (!currentPlayer) {
            status.textContent = "Enter player names and click start Game.";
            return;
        }

        if (!GameController.isGameOver()) {
            status.textContent =
                `Current Player: ${currentPlayer.name} (${currentPlayer.marker})`;

        } else {

            const winner = GameController.getWinner();

            if (winner) {
                status.textContent = `🎉 ${winner.name} wins!`;
            } else {
                status.textContent = "🤝 It's a tie!";
            }

        }

    };

    const restartButton = document.querySelector("#restart");

    restartButton.addEventListener("click", () => {

        GameController.restartGame();

        refreshDisplay();

    });

    const playerOneInput = document.querySelector("#player1");
    const playerTwoInput = document.querySelector("#player2");

    const startButton = document.querySelector("#start-game");

    startButton.addEventListener("click", () => {

        const playerOneName = playerOneInput.value.trim() || "Player X";

        const playerTwoName = playerTwoInput.value.trim() || "Player O";

        GameController.startGame(
            playerOneName,
            playerTwoName
        );

        refreshDisplay();

    });

    refreshDisplay();

})();