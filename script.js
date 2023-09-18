'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// check button CLICK
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ There is NO number!');

    // When the player wins
  } else if (secretNumber === guess) {
    displayMessage('🎉 Congrats, correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);
    // Implementing the Highscore Function
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the number is wrong
  } else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉Too low');
      score--;
    } else {
      displayMessage('💥 You lost the game!');
      score = 0;
      document.querySelector('body').style.backgroundColor = '#A22F17';
      document.querySelector('.number').style.width = '30rem';
    }
  }
  document.querySelector('.score').textContent = score;
});

// Again button CLICK
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.score').textContent = score;
});
