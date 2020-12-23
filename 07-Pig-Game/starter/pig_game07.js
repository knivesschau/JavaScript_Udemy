'use strict';

const activeTurn0 = document.querySelector('.player--0');
const activeTurn1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currScore0 = document.getElementById('current--0');
const currScore1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0; 
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0; 
let activePlayer = 0;

btnRoll.addEventListener('click', function() {
    const diceNumber = Math.trunc(Math.random() * 6) + 1; 
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
        document.getElementById(`current--${activePlayer}`).textContent = 0; 
        currentScore = 0; 
        activePlayer = activePlayer === 0 ? 1 : 0; 
        activeTurn0.classList.toggle('player--active');
        activeTurn1.classList.toggle('player--active');
    }
});