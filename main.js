var elementsNumber = 9;
var right = 0;
var wrong = 0;
var maxWrong = 3;
var countDown = 30;
var downloadTimer;

// Return random number between 0 & 1
function getRandom() {
  return Math.random();
}


// Init Game
function playGame() {
  right = 0;
  wrong = 0;
  newStep();
  document.querySelector('.menu').style.display = 'none';
  document.querySelector('.game').style.display = 'block';
}

// New step of the game
function newStep() {
  Timer(countDown);
  document.querySelector('#point').innerHTML = right;
  createList();
}

function createList() {
  // Remove old childs
  let list = document.querySelector('.element-list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Add Elements with random color
  let r = Math.floor(getRandom() * (255));
  let g = Math.floor(getRandom() * (255));
  let b = Math.floor(getRandom() * (255));
  for (let i = 0; i < elementsNumber; i++) {
    addElement(list, r, g, b);
  }

  // Set Different Element
  differentElement = list.children[RandomId()];
  differentElement.id = 'different';
  makeDifference(differentElement, r, g, b, 15);
}

// Create and add element to a list
function addElement(list, r, g, b) {
  let element = document.createElement('div');
  element.classList.add('element');

  // size according to number of element
  let size = 100 / Math.sqrt(elementsNumber) - 2 + '%';
  element.style.width = size;
  element.style.height = size;

  element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

  // interaction
  element.onclick = function() {
    test(element)
  };
  list.appendChild(element);
}

// Get a random element id
function RandomId() {
  let randomNumber = Math.floor(getRandom() * (elementsNumber));
  return randomNumber;
}

// Make the visual difference
function makeDifference(element, r, g, b, diff) {
  let randomNumber = getRandom();

  // Different form
  if (randomNumber < 0.5) {
    // element.classList.add('circle');
    element.style.borderRadius = '5%';
  }
  // Different Color
  else {
    r += diff;
    g += diff;
    b += diff;
    element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }
}

// Test the answer
function test(element) {
  if (element.id == 'different') {
    right++;
    newStep();
  } else {
    wrong++;
    if (wrong == maxWrong) {
      LooseGame();
    }
    console.log('Wrong : ' + wrong);
  }
}

function LooseGame() {
  // Hide game
  document.querySelector('.game').style.display = 'none';

  // Display retry menu
  document.querySelector('#play-button').innerHTML = 'retry';
  document.querySelector('#title').innerHTML = 'Sorry you loose...';
  document.querySelector('.menu').style.display = 'block';
}

// Countdown progress bar
function Timer(countDown) {
  clearInterval(downloadTimer);

  // Reset Progress Bar
  let progressBar = document.querySelector('.progress');
  while (progressBar.firstChild) {
    progressBar.removeChild(progressBar.firstChild);
  }
  let element = document.createElement('div');
  element.classList.add('progress-value');
  progressBar.appendChild(element);

  // Set width
  let width = countDown * 0.5 + 'rem';
  progressBar.style.width = width;
  element.style.width = width;

  let timeleft = countDown;

  downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      LooseGame();
    }
    timeleft -= 0.1;
    document.querySelector('.progress-value').style.width =
        timeleft * 0.5 + 'rem';
  }, 10);
}