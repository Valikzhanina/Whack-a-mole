const td = document.querySelectorAll('td');
const level = document.querySelectorAll('option');
const select = document.querySelector('select');
let t;

function getTimer() {
  select.addEventListener('change', () => {
    let timer = select.value;
    let delay = +timer * 1000;
    createPlayers();
    play(td, delay);

    return delay;
  });
}
getTimer();

const result = document.querySelector('div');
let flag = false;

let userCounter = 0;
let computerCounter = 0;
function createPlayers() {
  if (flag) return console.log('add recently');
  const user = document.createElement('div');
  user.textContent = `User : ${userCounter}`;
  const computer = document.createElement('div');
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

function play(td, delay) {
  setTimeout(function color() {
    randomNumber = getRandomIntInclusive(1, 100);
    for (let i = 0; i <= td.length; i++) {
      if (i == randomNumber - 1) {
        td[i].style.backgroundColor = 'red';

        let change = setTimeout(() => {
          td[i].style.backgroundColor = 'blue';
          computerCounter++;
          console.log(computerCounter);
        }, delay);

        td[i].addEventListener('click', () => {
          clearTimeout(change);
          if (td[i].style.backgroundColor == 'red') {
            td[i].style.backgroundColor = 'green';
            userCounter++;
            console.log(userCounter);
          } else {
            td[i].style.backgroundColor = 'blue';
            // computerCounter++;
            console.log(computerCounter);
          }
        });

        getRandomIntInclusive(1, 100);
        // console.log(getRandomIntInclusive(1, 100));
        setTimeout(color, delay);
      }
    }
  }, delay);
}
