// Player clicks "Rock" button
// add Event Listener
// Call playGame("Rock")    
// Inside playGame("Rock"):
// Computer randomly picks "Rock", "Paper", or "Scissors"
// Compare player and computer choices:
// Check if player wins
// Check if it's a draw
// Otherwise, computer wins
// Display the result


const choice = ["ROCK", "PAPER", "SCISSORS"];

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", function () {
    playGame("ROCK")
});

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", function () {
    playGame("PAPER")
});

const scissorsBtn = document.getElementById("scissors")
scissorsBtn.addEventListener("click", function () {
    playGame("SCISSORS")
});

//score feature
    let playerScore = 0;
    let computerScore = 0;

    if (results.textContent === "You win!") {
        document.getElementById(player-score).textContent = playerScore++
    }
    else if (results.textContent === "You lose!") {
        document.getElementById(computer-score).textContent = computerScore++
    }

function playGame(playerChoice) {
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choice[randomIndex];
    let results = document.getElementById("game-result");

    if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        results.textContent = "You win!"
    }
    else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        results.textContent = "You win!"
    }
    else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        results.textContent = "You win!"
    }
    else if (playerChoice === computerChoice) {
        results.textContent = "It's a draw"
    }
    else {
        results.textContent = "You lose!"
    }

    // function to show player and computer choices in <p> elements
    function displayPlayerChoice(playerChoice) {
        document.getElementById("playerChoice").textContent = `You chose ${playerChoice}`;
    }

    function displayComputerChoice(computerChoice) {
        document.getElementById("computerChoice").textContent = `Computer chose ${computerChoice}`;
    }

    // console.log(`${displayPlayerChoice}`, " ", `${displayComputerChoice}`)
}

// reset game button

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
    document.getElementById("game-results").textContent = "";
    document.getElementById("player-choice").textContent = "";
    document.getElementById("computer-choice").textContent = "";
}

