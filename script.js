const td = document.querySelectorAll('td');
const level = document.querySelectorAll('option');
const select = document.querySelector('select');
let t;
function getTimer() {
  select.addEventListener('change', () => {
    let timer = select.value;
    console.log(timer);
    return timer;
  });
}

let c = getTimer();
console.log(c);

const result = document.querySelector('div');
let userCounter = 0;
let computerCounter = 0;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (select.value !== 'undefined') {
  setInterval(function () {
    for (let elem of td) {
      if (elem === getRandomIntInclusive(0, 100) - 1) {
        console.log('ghbdtn');
        td[elem].style.backgroundColor = 'blue';
      }
    }
  }, 300);
}

// coloredRandom();
// function coloredRandom() {
// getRandomIntInclusive(1, 100);

// getRandomIntInclusive(1, 100);
// setTimeout(coloredRandom, time);
// setTimeout(coloredRandom, 1000);
// function colorRandom() {
//   for (let i = 1; i <= td.length; i++) {
//     if (i === getRandomIntInclusive(1, 100)) {
//       td[i].style.backgroundColor = 'blue';
//     }
//   }

//       td[i].addEventListener('click', function (e) {
//         e.target.style.backgroundColor = 'green';
//         userCounter++;
//         user = document.createElement('div');
//         user.textContent = userCounter;
//         result.appendChild(user);
//         counter++;
//       });
//       function colored() {
//         td[i].style.backgroundColor = 'red';
//         computerCounter++;
//       //   if (counter > 0) {
//       //     td[i].addEventListener('click', function (e) {
//       //       e.target.style.backgroundColor = 'green';
//       //     });
//       //   }
//       setTimeout(colored, 1500);
//     }
//     setTimeout(colored, 1500);
//   }

// }
