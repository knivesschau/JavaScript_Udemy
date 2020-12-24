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

let scores;
let currentScore;
let activePlayer;
let playing; 

const initializeGame = function() {
    scores = [0, 0];
    currentScore = 0; 
    activePlayer = 0;
    playing = true; 

    score0.textContent = 0;
    score1.textContent = 0;
    currScore0.textContent = 0;
    currScore1.textContent = 0;

    dice.classList.add('hidden')
    activeTurn0.classList.remove('player--winner');
    activeTurn1.classList.remove('player--winner');
    activeTurn0.classList.add('player--active');
    activeTurn1.classList.remove('player--active');
}

initializeGame();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
    currentScore = 0; 
    activePlayer = activePlayer === 0 ? 1 : 0; 
    activeTurn0.classList.toggle('player--active');
    activeTurn1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if (playing) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1; 
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNumber}.png`;

        if (diceNumber !== 1) {
            currentScore += diceNumber; 
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false; 
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }
});

btnNewGame.addEventListener('click', function() {
    initializeGame();
});