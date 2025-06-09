// 1. Selecting the Game Board Elements
// First, we need to get references to the game’s elements so we can control them.
// - Finding HTML Elements in JavaScript
// - JavaScript selects elements using methods like document.getElementById() or document.querySelector().
// In JavaScript, document refers to the Document Object Model (DOM), which is the structure of your webpage. Think of it as a blueprint that JavaScript can interact with to modify content, style, and behavior.
// Every webpage is essentially a tree-like structure, where:
// - The top-level element is <html>.
// - Inside <html>, you have <head> and <body>.
// - Inside <body>, you have elements like buttons, divs, images, and more.
// JavaScript needs a way to access these elements, and document is the gateway that allows it to do so.
// - When you write:
const board = document.querySelectorAll(".cell");
// Here’s what happens:
// - document tells JavaScript, "Look at the entire webpage."
// - .querySelectorAll(".cell") tells JavaScript, "Find ALL elements with the class cell."
// This returns a list (called a NodeList) of all matching elements, which you can loop through and manipulate.

const statusText = document.getElementById("status");
// - Selects the text that displays whose turn it is.

const resetBtn = document.getElementById("reset");
// - document.querySelectorAll(".cell"): Finds all the squares on the board.
// - document.getElementById("status"): Gets the status text that tells whose turn it is.
// - document.getElementById("reset"): Gets the reset button so we can restart the game.
// These variables store references to elements so we can modify them in JavaScript and will be used later when we update the board and reset the game.

// 2. Setting Up Game Variables
// Next, we need to create variables to track the game state.
let currentPlayer = "X";
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""]; // Represents the 3x3 grid
// - currentPlayer = "X": Keeps track of whose turn it is and starts the game with Player X.
// - gameActive = true: Ensures the game runs until a player wins or a draw occurs.
// - also can be written as: let boardState = Array(9).fill(""): Creates an array with 9 empty spots (one for each square). This represents the game board. - "X" or "O" will replace empty strings ("") when a player makes a move.


// 3. Defining Winning Combinations
// Now, we list the possible ways a player can win.
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
];
// - - This list of arrays represents winning patterns
// - Each inner array contains the indexes of a winning row, column, or diagonal.
// For example, [0, 1, 2] means if the first three squares have the same mark, that player wins.

// 4. Adding Click Functionality to Each Square
// Now, we tell the game what to do when a player clicks a square.
board.forEach((cell, index) => {
    cell.addEventListener("click", function () {
// - board.forEach(...): Loops through all the squares.
// - .addEventListener("click", function() {...}) listens for a player's click on a square.
// - index gives each square’s position (0-8).
// When a square is clicked, the game will check if it's empty and update it.

// 5. Preventing Moves in Already Filled Squares
// We don't want players to overwrite an existing move.
        if (!gameActive || boardState[index] !== "") {
            return; // Stop if the game is over or square is already filled
        }
// - !gameActive: Stops the game if a winner has already been determined.
// - boardState[index] !== "": Ensures the square is empty before placing a mark.
// If a player clicks a square that already has an "X" or "O", nothing happens.

// 6. Updating the Board with the Player’s Move
// Now we place the player's mark.
        boardState[index] = currentPlayer;
        cell.textContent = currentPlayer;
// - boardState[index] = currentPlayer: Stores the move in the board array.
// - cell.textContent = currentPlayer: Updates the square visually with "X" or "O".

// 7. Checking for a Winner
// After every move, the game checks if the player has won.

        if (checkWinner()) {
            statusText.textContent = currentPlayer + " wins!";
            gameActive = false;
            return; // Stop further moves
        }
// - Calls checkWinner() to see if the current player wins.
// - If someone wins:
// - Updates the status message.
// - Ends the game (gameActive = false).
// - Returns early to stop further moves.


// 8. Checking for a Draw
// If no one wins and the board is full, the game announces a draw.
       let isDraw = true;
        for (let i = 0; i < boardState.length; i++) {
            if (boardState[i] === "") {
                isDraw = false; // Found an empty spot, game is not a draw yet
            }
        }
       if (isDraw) {
            statusText.textContent = "It's a draw!";
            gameActive = false;
            return;
        }
// - isDraw = true: Assumes the board is full unless proven otherwise.
// - Loop through boardState:
// - If an empty square ("") exists, it’s not a draw.
// - If all squares are filled, update status and stop the game


// 9. Switching Turns
// If the game isn’t over, it switches players.
        // Switch to the next player (using if-else instead of ternary operator)
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
        // Update turn status
        statusText.textContent = currentPlayer + "'s turn";
//  - Updates the text after each move so players know whose turn it is.
// - If currentPlayer is "X", switch to "O".
// - Otherwise, switch back to "X".
// This ensures players alternate turns correctly.
    });
});

// 10. Creating the Check-Winner Function
// This function determines if a player has won.
function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let combination = winningCombinations[i];
        let first = boardState[combination[0]];
        let second = boardState[combination[1]];
        let third = boardState[combination[2]];

        if (first !== "" && first === second && first === third) {
            return true; // A winning combination was found
        }
    }
    return false; // No winner yet
}
// - Loops through each winning pattern.
// - Checks if all three squares in a pattern contain the same symbol ("X" or "O").
// - If a match is found, returns true and ends the game.

// 11. Resetting the Game
// The reset button allows players to start over.
resetBtn.addEventListener("click", function () {
// - Listens for clicks on the reset button.
    for (let i = 0; i < boardState.length; i++) {
        boardState[i] = ""; // Clear board state
    }
// - Loops through boardState, removing all symbols to reset the board.
    board.forEach(function (cell) {
        cell.textContent = ""; // Clear text on the board
    });
// - Clears the squares in the HTML.
    currentPlayer = "X"; // Reset the first player
    statusText.textContent = "X's turn";
    gameActive = true; // Reactivate the game
});
// - Resets:
// - Player X as first player.
// - Status message.
// - gameActive = true, allowing the game to start again.


