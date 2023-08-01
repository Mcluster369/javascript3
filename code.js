// code.js

// Function to simulate the Craps game
function playCraps() {
    // Generate two random numbers between 1 and 6
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the two dice
    const sum = die1 + die2;

    // Get the output element to display results
    const outputElement = document.getElementById("output");

    // Check the game rules and provide appropriate output
    if (sum === 7 || sum === 11) {
        outputElement.innerHTML = "CRAPS - You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        outputElement.innerHTML = "You won!";
    } else {
        outputElement.innerHTML = "You pushed!";
    }
}

// Event listener for the button click
document.getElementById("playButton").addEventListener("click", playCraps);
