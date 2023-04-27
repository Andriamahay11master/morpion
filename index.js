// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div class="appBody">
<h1>Morpion game</h1>
<table class="tableMorpion">
<tr>
  <td id="case0"></td>
  <td id="case1"></td>
  <td id="case2"></td>
</tr>
<tr>
  <td id="case3"></td>
  <td id="case4"></td>
  <td id="case5"></td>
</tr>
<tr>
  <td id="case6"></td>
  <td id="case7"></td>
  <td id="case8"></td>
</tr>
</table>
</div>
`;

let clickCounter = 1;
let box = document.querySelectorAll('.tableMorpion td');

function fillBoxPlayerOne(i) {
  let valBox = document.querySelector('#case' + i).innerHTML;
  if (valBox === '') {
    document.querySelector('#case' + i).innerHTML = 'X';
    clickCounter = 2;
  } else {
    clickCounter = 1;
  }
}

function fillBoxPlayerTwo(i) {
  let valBox = document.querySelector('#case' + i).innerHTML;
  if (valBox === '') {
    document.querySelector('#case' + i).innerHTML = 'O';
    clickCounter = 1;
  } else {
    clickCounter = 2;
  }
}

function morpion(i) {
  if (clickCounter === 1) {
    fillBoxPlayerOne(i);
    testCase('X');
  } else {
    fillBoxPlayerTwo(i);
    testCase('O');
  }
}

function testCase(val) {
  //Test ligne par ligne
  for (let i = 0; i < box.length; i = i + 3) {
    if (
      box[i].innerHTML === val &&
      box[i + 1].innerHTML === val &&
      box[i + 2].innerHTML === val
    ) {
      box[i].classList.add('winner');
      box[i + 1].classList.add('winner');
      box[i + 2].classList.add('winner');
    }
  }

  //Test colonne par colonne
  for (let j = 0; j < 3; j++) {
    if (
      box[j].innerHTML === val &&
      box[j + 3].innerHTML === val &&
      box[j + 6].innerHTML === val
    ) {
      box[j].classList.add('winner');
      box[j + 3].classList.add('winner');
      box[j + 6].classList.add('winner');
    }
  }

  //Test des deux diagonales
  for (let k = 0; k <= 2; k = k + 2) {
    if (
      box[k].innerHTML === val &&
      box[4].innerHTML === val &&
      box[8 - k].innerHTML === val
    ) {
      box[k].classList.add('winner');
      box[4].classList.add('winner');
      box[8 - k].classList.add('winner');
    }
  }
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    morpion(i);
  });
}
