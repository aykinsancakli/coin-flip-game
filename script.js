/* Game Algorithm
          1) User press a button = make a guess => (head or tails)
          2) A random number generated
          3) If random number matches Win otherwise Lose
        */

const scores = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
};

document.querySelector('.js-result-paragraph').innerText = `?`;

document.querySelector(
  '.js-scores-paragraph'
).innerText = `Wins: ${scores.wins}, Losses: ${scores.losses}`;

function playGame(guess) {
  const randomNumber = Math.random();
  let result;
  result = randomNumber < 0.5 ? 'heads' : 'tails';

  if (result === guess) {
    scores.wins++;
    document.querySelector('.js-result-paragraph').innerText = `You Win 🏆`;
  } else {
    scores.losses++;
    document.querySelector('.js-result-paragraph').innerText = 'You Lose 😢';
  }

  document.querySelector(
    '.js-scores-paragraph'
  ).innerText = `Wins: ${scores.wins}, Losses: ${scores.losses}`;

  localStorage.setItem('score', JSON.stringify(scores));
}
