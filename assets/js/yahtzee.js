// Unicodes for Dice
// - ⚀ (U+2680) → Dice Face 1
// - ⚁ (U+2681) → Dice Face 2
// - ⚂ (U+2682) → Dice Face 3
// - ⚃ (U+2683) → Dice Face 4
// - ⚄ (U+2684) → Dice Face 5
// - ⚅ (U+2685) → Dice Face 6



const diceFaces = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const dice = document.getElementById("dice");

function rollDice() {
  dice.textContent = diceFaces[Math.floor(Math.random() * diceFaces.length)];
  dice.style.transform = "rotate(" + Math.random() * 360 + "deg)";
}


