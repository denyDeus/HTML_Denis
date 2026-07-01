const rps = {
    playerScore: 0,
    computerScore: 0,
    playRound(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        if (playerChoice === computerChoice) {
            return "tie";
        }
        
        const playerWins = 
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper");
        
        if (playerWins) {
            this.playerScore++;
            return "player";
        } else {
            this.computerScore++;
            return "computer";
        }
    },
    getWinningPlayer() {
        if (this.playerScore > this.computerScore) return "player";
        if (this.computerScore > this.playerScore) return "computer";
        return "tie";
    },
    reset() {
        this.playerScore = 0;
        this.computerScore = 0;
    },
};

rps.playRound("rock"); // returns "player" because we're awesome at RPS
console.log(rps.playerScore); // 1 - we won and so our score increased

rps.playRound("rock"); // returns "computer" because... luck...
console.log(rps.computerScore); // 1

rps.playRound("scissors"); // returns "player" because we're awesome at RPS (again)
console.log(rps.playerScore); // 2
console.log(rps.getWinningPlayer()); // "player" since we're 2-1 up
