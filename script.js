'use strict';

/* variables */
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

/* functions to display changes */
const display = function (selector, value) {
  document.querySelector(`${selector}`).textContent = value;
};

const displayCorrectState = function () {
  styleNumberWidth('30rem');
  styleBackgroundColor('#60b347');
  display('.number', secretNumber);
  display('.message', 'Correct Number!');

  if (score > highscore) {
    highscore = score;
    display('.highscore', highscore);
  }
};

const styleNumberWidth = function (style) {
  document.querySelector('.number').style.width = style;
};

const styleBackgroundColor = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};

/* Again button click */
const playAgain = function () {
  display('.score', 20);
  display('.number', '?');
  styleNumberWidth('15rem');
  styleBackgroundColor('#222');
  display('.message', 'Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
};

/* Check button click */
const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);

  // if no input
  if (!guess) {
    display('.message', 'No number!');

    // if correct
  } else if (guess === secretNumber) {
    displayCorrectState();

    // if incorrect
  } else if (guess !== secretNumber) {
    score--;
    display('.score', score);
    display('.message', `Too ${guess > secretNumber ? 'high!' : 'low!'}`);

    // if lose
  } else {
    display('.score', 0);
    display('.message', '💥 You lost!');
  }
};
