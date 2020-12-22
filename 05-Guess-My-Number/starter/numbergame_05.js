'use strict';

// number guessing game functionality + reset game challenge
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20; 
let highScore = 0; 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score; 
}

const resetGame = function(defaultText, defaultValue, defaultBg, defaultWidth) {
    document.querySelector('.number').textContent = defaultText;
    document.querySelector('.guess').value = defaultValue;
    document.querySelector('body').style.backgroundColor = defaultBg;
    document.querySelector('.number').style.width = defaultWidth;
}

const gameWin = function(actualNum, winningBg, winningNum) {
    document.querySelector('.number').textContent = actualNum;
    document.querySelector('body').style.backgroundColor = winningBg;
    document.querySelector('.number').style.width = winningNum;
}

// game functionality
document.querySelector('.check').addEventListener('click', function() {
    const numberGuess = Number(document.querySelector('.guess').value);

    if (!numberGuess) {
        displayMessage('🚫 No number entered!');
    }
    else if (numberGuess === number) {
        gameWin(number, '#60b347', '30rem');
        displayMessage('🎊 Correct! +1 point!'); 
        score++;
        displayScore(score);

        if (score > highScore) {
            highScore = score; 
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if (numberGuess !== number) {
        if (score > 1) {
            displayMessage(numberGuess > number ? '📈 Too high! -1 point!' : '📉 Too low! -1 point!');
            score--;
            displayScore(score);
        }
        else {
            displayMessage('😭 Game Over 😭');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    displayScore(score);
    resetGame('?', '', '#222', '15rem');
});