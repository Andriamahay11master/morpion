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

function fillBoxPlayerOne(i) {
  let valBox = document.querySelector('#case' + i).innerHTML;
  if (valBox === '') {
    document.querySelector('#case' + i).innerHTML = 'X';
    clickCounter = 2;
  }
  else{
    clickCounter = 1;
  }
}

function fillBoxPlayerTwo(i) {
  let valBox = document.querySelector('#case' + i).innerHTML;
  if (valBox === '') {
    document.querySelector('#case' + i).innerHTML = 'O';
    clickCounter = 1;
  }
  else{
    clickCounter = 2
  }
}

function morpion(i) {
  if (clickCounter === 1) {
    fillBoxPlayerOne(i);
  } else {
    fillBoxPlayerTwo(i);
  }
}

let box = document.querySelectorAll('.tableMorpion td');
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    morpion(i);
  });
}
