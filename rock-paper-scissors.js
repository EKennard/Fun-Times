// Player clicks "Rock" button
//           ↓
// JavaScript detects the click using addEventListener
//           ↓
// Anonymous function runs:
//     → Calls playGame("Rock")
//           ↓
// Inside playGame("Rock"):
//     → Computer randomly picks "Rock", "Paper", or "Scissors"
//           ↓
// Compare player and computer choices:
//     → Check if it's a draw
//     → Check if player wins
//     → Otherwise, computer wins
//           ↓
// Display the result using resultText.textContent


const choice = ["ROCK", "PAPER", "SCISSORS"];

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", function () {
    playGame("ROCK")
})

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", function () {
    playGame("PAPER")
});

const scissorsBtn = document.getElementById("scissors")
scissorsBtn.addEventListener("click", function () {
    playGame("SCISSORS")
});

const winningCombinations = (choice [[0, 2], [1, 0], [2, 1]]);

// // need to set these to write not get? put these choices in a function?
// const playerChoice = document.getElelemtById (player-choice);
// const computerChoice = choice(Math.floor(Math.random) * 3);

function playGame(playerChoice) {
    let randonIndex = Math.floor(Math.random() *3);
    let computerChoice = choice[RandomIndex];

    // if and else statements here

}

const results = document.getElementById("game-result");
// function for game results here


const resetBtn = document.getElementById("reset");
// function for reset button here





