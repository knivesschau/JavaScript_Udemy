'use strict';

// number guessing game functionality + reset game challenge
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20; 

document.querySelector('.number').textContent = number; 

document.querySelector('.check').addEventListener('click', function() {
    const numberGuess = Number(document.querySelector('.guess').value);

    if (!numberGuess) {
        document.querySelector('.message').textContent = '🚫 No number entered!';
    }
    else if (numberGuess === number) {
        document.querySelector('.message').textContent = '🎊 Correct! +1 point!'; 
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if (numberGuess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 You guessed too high! -1 point!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '😭 Game Over 😭';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (numberGuess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 You guessed too low! -1 point!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '😭 Game Over 😭';
            document.querySelector('.score').textContent = 0;
        }
    }
});