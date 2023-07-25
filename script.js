const maxLives = 10;
    let remainingLives = maxLives;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function startGame() {
      document.getElementById('startButton').style.display = 'none';
      document.getElementById('gameDiv').style.display = 'block';
      document.getElementById('message').textContent = "";
      document.getElementById('lives').textContent = "";
      remainingLives = maxLives;
      attempts = 0;
    }

    function checkGuess() {
      const guess = parseInt(document.getElementById('guess').value);
      attempts++;

      if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = "Please enter a valid number between 1 and 100.";
        return;
      }

      if (guess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('lives').textContent = "";
        return;
      }

      remainingLives--;

      if (remainingLives === 0) {
        document.getElementById('message').textContent = `Game Over! The number was ${randomNumber}.`;
        document.getElementById('lives').textContent = "";
        return;
      }

      document.getElementById('message').textContent = "Try again!";
      document.getElementById('lives').textContent = `Remaining Lives: ${remainingLives}`;
    }