// JavaScript Game Logic

let target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to make a guess
function makeGuess() {
    const guessInput = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");
    const rankDisplay = document.getElementById("rank");

    let guess = Number(guessInput.value);

    // Check if input is valid
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        feedback.textContent = "Please enter a number between 1 and 100!";
        return;
    }

    attempts += 1;

    if (guess < target) {
        feedback.textContent = "Too low! Try again.";
    } else if (guess > target) {
        feedback.textContent = "Too high! Try again.";
    } else {
        feedback.textContent = `Congratulations! You guessed it right in ${attempts} attempts!`;
        displayRank();
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = ""; // Clear the input field
}

// Function to display rank
function displayRank() {
    const rankDisplay = document.getElementById("rank");
    let rank;

    if (attempts <= 5) {
        rank = "Genius";
    } else if (attempts <= 10) {
        rank = "Pro";
    } else if (attempts <= 15) {
        rank = "Amateur";
    } else {
        rank = "Beginner";
    }

    rankDisplay.textContent = `Your rank is: ${rank}`;
}

// Function to reset the game
function resetGame() {
    target = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("feedback").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("rank").textContent = "";
    document.getElementById("guessInput").value = "";
}
