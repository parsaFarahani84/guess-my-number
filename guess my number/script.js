'use strict';

const modal = document.querySelector('.modal');
const overly = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const me = document.querySelectorAll('.me');

for (let i = 0; i < me.length; i++) {
  me[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overly.classList.remove('hidden');
    document.querySelector('body').style.fontFamily = 'sans-serif';
  });
  const closemodal = function () {
    modal.classList.add('hidden');
    overly.classList.add('hidden');
  };

  btnclosemodal.addEventListener('click', closemodal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (!modal.classList.contains('hidden')) {
        closemodal();
      }
    }
  });
}

overly.addEventListener('click', function () {
  modal.classList.add('hidden');
  overly.classList.add('hidden');
});

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  /*------------------------------DRAY CODE*------------------------------*/
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
  };
  /*-----------------------------------------------------------------------*/

  if (!guess) {
    displayMessage('No Number!!!');
 
  } else if (guess === number) {
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#11998e';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(number);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //new code!!!
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'high number!' : 'lowe number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //old code!!!
  // else if (guess > number) {
  //   if (score1 > 1) {
  //     document.querySelector('.message').textContent = 'too hight!';
  //     score1--;
  //     document.querySelector('.score').textContent = score1;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < number) {
  //   if (score1 > 1) {
  //     document.querySelector('.message').textContent = 'too short!';
  //     score1--;
  //     document.querySelector('.score').textContent = score1;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
