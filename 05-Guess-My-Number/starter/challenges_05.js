'use strict';

// number guessing game functionality + reset game challenge
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20; 

// game functionality
document.querySelector('.check').addEventListener('click', function() {
    const numberGuess = Number(document.querySelector('.guess').value);

    if (!numberGuess) {
        document.querySelector('.message').textContent = '🚫 No number entered!';
    }
    else if (numberGuess === number) {
        document.querySelector('.number').textContent = number; 
        document.querySelector('.message').textContent = '🎊 Correct! +1 point!'; 
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if (numberGuess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high! -1 point!';
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
            document.querySelector('.message').textContent = '📉 Too low! -1 point!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '😭 Game Over 😭';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});