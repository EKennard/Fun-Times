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

function playGame(playerChoice) {
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choice[randomIndex];
    let results = document.getElementById("game-result");

    if (playerChoice === "ROCK" & computerChoice === "SCISSORS") {
        results.textContent = "You win!"
    }
    else if (playerChoice === "PAPER" & computerChoice === "ROCK") {
        results.textContent = "You win!"
    }
    else if (playerChoice === "SCISSORS" & computerChoice === "PAPER") {
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
        document.getElementById("playerChoice").textContent = "You chose [$playerChoice]";
    }

    function displayComputerChoice(computerChoice) {
        document.getElementById("computerChoice").textContent = "Copmputer chose $[computerChoice]";
    }

    console.log("$[displayPlayerChoice]", " ", "$[displayComputerChoice]")

    //score feature
    let playerScore = 0;
    let computerScore = 0;

    if (results === "You win!") {
        document.getElementById(playerScore).textContent = playerScore++
    }
    else if (results === "You lose!") {
        document.getElementById(computerScore).textContent = computerScore++
    }
}

// reset game button

const resetBtn = document.getEmelemtById("reset")

function resetGame() {
    document.addEventListener("click", resetGame);
    results.textContent = "";
}




