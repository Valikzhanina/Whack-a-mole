const td = document.querySelectorAll('td');
const level = document.querySelectorAll('option');
const select = document.querySelector('select');
let t;
function getTimer() {
  select.addEventListener('change', () => {
    let timer = select.value;
    console.log(timer);
    createPlayers();
    return timer;
  });
}

let c = getTimer();
console.log(c);

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

// if (select.value !== 'undefined') {
//   setInterval(function () {
//     for (let elem of td) {
//       if (elem === getRandomIntInclusive(0, 100) - 1) {
//         console.log('ghbdtn');
//         td[elem].style.backgroundColor = 'blue';
//       }
//     }
//   }, 300);
// }
