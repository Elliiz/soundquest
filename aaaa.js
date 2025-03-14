// Navigation between pages
function navigateTo(page) {
    window.location.href = page;
}

// Timer for solo game
let countdownInterval;

function startCountdown() {
    let timeLeft = 60;
    const countdownElement = document.getElementById('countdown');
    countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
            navigateTo('category.html');
        }
    }, 1000);
}

// Start the game with selected category
function startGame(category) {
    alert(`Starting game with category: ${category}`);
    navigateTo('sologame.html');
}

// Check the selected answer
function checkAnswer(button) {
    const correctAnswer = "See you again";
    if (button.textContent === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    nextRound();
}

// Move to the next round
function nextRound() {
    clearInterval(countdownInterval);
    startCountdown();  // Restart countdown for the next round
}