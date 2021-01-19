const td = document.querySelectorAll('td');
const level = document.querySelectorAll('option');
const select = document.querySelector('select');
let t;

function getTimer() {
  select.addEventListener('change', () => {
    let timer = select.value;
    let delay = +timer * 1000;
    console.log(delay);
    createPlayers();
    play(td, delay);

    return delay;
  });
}
getTimer();

const result = document.querySelector('div');
let flag = false;
function createPlayers() {
  if (flag) return console.log('add recently');
  const user = document.createElement('div');
  let userCounter = 0;
  user.textContent = `User : ${userCounter}`;
  const computer = document.createElement('div');
  let computerCounter = 0;
  computer.textContent = `Computer : ${computerCounter}`;
  result.append(user, computer);
  flag = true;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomIntInclusive(1, 100);
console.log(randomNumber);
function play(td, delay) {
  setTimeout(function color() {
    randomNumber = getRandomIntInclusive(1, 100);
    for (let i = 0; i <= td.length; i++) {
      if (i == randomNumber - 1) {
        td[i].style.backgroundColor = 'red';
        getRandomIntInclusive(1, 100);
        console.log(getRandomIntInclusive(1, 100));
        setTimeout(color, delay);
      }
    }
  }, delay);
}
