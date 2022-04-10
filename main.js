const SVGs = {
  square: [
    {
      transform: 'matrix(1,0,0,1,0,-246)',
      d: 'M178,248.554C178,247.144 176.856,246 175.446,246L2.554,246C1.144,246 0,247.144 0,248.554L0,421.446C0,422.856 1.144,424 2.554,424L175.446,424C176.856,424 178,422.856 178,421.446L178,248.554Z'
    },
    {
      transform: 'matrix(1,0,0,1,0,-246)',
      d: 'M178,253.994C178,249.582 174.418,246 170.006,246L7.994,246C3.582,246 0,249.582 0,253.994L0,416.006C0,420.418 3.582,424 7.994,424L170.006,424C174.418,424 178,420.418 178,416.006L178,253.994Z'
    }
  ],
  star: [
    {
      transform: 'matrix(1,0,0,1,-334.097,-145)',
      d: 'M417.137,150.324C419.947,146.951 424.11,145 428.5,145C432.89,145 437.053,146.951 439.863,150.324L469.95,186.45L513.604,203.9C517.681,205.53 520.822,208.887 522.179,213.062C523.536,217.237 522.967,221.799 520.627,225.514L495.567,265.291L492.46,312.202C492.17,316.583 489.949,320.608 486.397,323.188C482.845,325.769 478.33,326.638 474.075,325.56L428.5,314.018L382.925,325.56C378.67,326.638 374.155,325.769 370.603,323.188C367.051,320.608 364.83,316.583 364.54,312.202L361.433,265.291L336.373,225.514C334.033,221.799 333.464,217.237 334.821,213.062C336.178,208.887 339.319,205.53 343.396,203.9L387.05,186.45L417.137,150.324Z'
    },
    {
      transform: 'matrix(1,0,0,1,-334.097,-145)',
      d: 'M394.759,167.638C400.37,153.944 413.701,145 428.5,145C443.299,145 456.63,153.944 462.241,167.638L469.95,186.45L490.223,187.968C504.98,189.073 517.606,198.987 522.179,213.062C526.752,227.136 522.365,242.579 511.076,252.147L495.567,265.291L500.388,285.041C503.897,299.418 498.369,314.49 486.397,323.188C474.424,331.887 458.382,332.486 445.794,324.706L428.5,314.018L411.206,324.706C398.618,332.486 382.576,331.887 370.603,323.188C358.631,314.49 353.103,299.418 356.612,285.041L361.433,265.291L345.924,252.147C334.635,242.579 330.248,227.136 334.821,213.062C339.394,198.987 352.02,189.073 366.777,187.968L387.05,186.45L394.759,167.638Z'
    }
  ]
};

var elementsNumber = 4;
var right = 0;
var wrong = 0;
var maxWrong = 3;
var countDown = 30;
var downloadTimer;  // keep track to reset before setting an other timer



// Converts to HSL, shifts * hue by 180 degrees
function getComplementary(rgb) {
  rgb = rgb.replace(/[^\d,]/g, '').split(',');
  var r = rgb[0], g = rgb[1], b = rgb[2];
  // Convert RGB to HSL //
  r /= 255.0;
  g /= 255.0;
  b /= 255.0;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2.0;
  if (max == min) {
    h = s = 0;  // achromatic
  } else {
    var d = max - min;
    s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));
    if (max == r && g >= b) {
      h = 1.0472 * (g - b) / d;
    } else if (max == r && g < b) {
      h = 1.0472 * (g - b) / d + 6.2832;
    } else if (max == g) {
      h = 1.0472 * (b - r) / d + 2.0944;
    } else if (max == b) {
      h = 1.0472 * (r - g) / d + 4.1888;
    }
  }
  h = h / 6.2832 * 360.0 + 0;  // Shift hue to opposite side of wheel and
  // convert to[0 - 1] value
  h += 180;
  if (h > 360) {
    h -= 360;
  }
  h /= 360;
  // Convert h s and l values into r g and b values
  if (s === 0) {
    r = g = b = l;  // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);  // Convert r b and g values to hex
  rgb = b | (g << 8) | (r << 16);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// TODO : fonction de densité à faire par rapport au temps pour la
// différence de couleur

/************************** RANDOM **************************/

// Return random number between 0 & 1
function getRandom() {
  return Math.random();
}

// Get a random element id
function getRandomId() {
  return Math.floor(getRandom() * (elementsNumber));
}

// Get random number between min & max
function getRandomBetween(min, max) {
  return Math.floor(getRandom() * (max - min + 1) + min);
}

// Get random shape
function getRandomShape() {
  random = getRandom();
  if (random < 0.5) {
    return 'square';
  } else {
    return 'star';
  }
}

// Get random color difference between min and max (negative or positive)
function getRandomColorDiff(min, max) {
  randomColorDiff = getRandomBetween(min, max);
  if (getRandom() < 0.5) {
    return randomColorDiff;
  } else {
    return -randomColorDiff;
  }
}

/************************** GAME **************************/

// Init Game
function playGame() {
  right = 0;
  wrong = 0;
  elementsNumber = 4;
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

// Create the pattern
function createList() {
  // Remove old childs
  let list = document.querySelector('.element-list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Update number of elements according to the progression
  if (right == 4) {
    elementsNumber = 9;
  } else if (right == 9) {
    elementsNumber = 16;
  } else if (right == 16) {
    elementsNumber = 25;
  }

  // Add Elements with random color and shape
  let r = Math.floor(getRandomBetween(30, 225));
  let g = Math.floor(getRandomBetween(30, 225));
  let b = Math.floor(getRandomBetween(30, 225));
  let shape = getRandomShape();
  for (let i = 0; i < elementsNumber; i++) {
    addElement(list, r, g, b, shape);
  }

  // Set background gradient
  var color = 'rgb(' + r + ',' + g + ',' + b + ')';
  var complementary = getComplementary(color);
  document.body.style.background = 'linear-gradient(rgb(' + r + ',' + g + ',' +
      b + '), rgb(200, 200, 200), ' + complementary + ')';

  // Set Different Element
  differentElement = list.children[getRandomId()];
  differentElement.id = 'different';
  makeDifference(differentElement, r, g, b, shape);
}

// Create and add element to a list
function addElement(list, r, g, b, shape) {
  let element = document.createElement('div');
  element.classList.add('element');

  // size according to number of element
  let size = 100 / Math.sqrt(elementsNumber) - 2 + '%';
  element.style.width = size;
  element.style.height = size;

  document.documentElement.style.setProperty(
      '--background', 'rgb(' + r + ',' + g + ',' + b + ')');
  createSVG(element, shape, 0);

  // interaction
  element.onclick = function() {
    test(element)
  };
  list.appendChild(element);
}

// Make the visual difference
function makeDifference(element, r, g, b, shape) {
  let randomNumber = getRandom();

  // Different shape
  if (randomNumber < 0.5) {
    element.removeChild(element.firstChild);
    createSVG(element, shape, 1);
  }
  // Different Color
  else {
    // change diff color range according to the progression
    let max = 30;
    if (right > 5) {
      max = 15;
    }
    r += getRandomColorDiff(10, max);
    g += getRandomColorDiff(10, max);
    b += getRandomColorDiff(10, max);
    element.style.setProperty(
        '--background', 'rgb(' + r + ',' + g + ',' + b + ')');
  }
}

// Create SVG
function createSVG(element, shape, id) {
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('viewBox', '0 0 189 182');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  svg.setAttribute('xml:space', 'preserve');
  svg.setAttribute('xmlns:serif', 'http://www.serif.com/');

  let svgG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  svgG.setAttribute('transform', SVGs[shape][id].transform);

  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', SVGs[shape][id].d);
  svgG.appendChild(path);
  svg.appendChild(svgG);
  element.appendChild(svg);
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

// Loose Game state
function LooseGame() {
  // Hide game
  document.querySelector('.game').style.display = 'none';

  // Display retry menu
  document.querySelector('#play-button').innerHTML = 'Retry';
  document.querySelector('#title').innerHTML = 'Sorry you loose...';
  document.querySelector('#score').innerHTML = 'Score : ' + right;
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