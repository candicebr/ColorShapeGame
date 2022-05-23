const SVGs = {
  square: [
    {d: 'M146.28,146.28H0V0H146.28V146.28Z', viewBox: '0 0 146.28 146.28'}, {
      d: 'M138.34,146.28H7.95c-4.39,0-7.95-3.56-7.95-7.95V7.95C0,3.56,3.56,0,7.95,0H138.34c4.39,0,7.95,3.56,7.95,7.95V138.34c0,4.39-3.56,7.95-7.95,7.95Z',
      viewBox: '0 0 146.28 146.28'
    }
  ],
  pentagone: [
    {
      d: 'M76.91,0L36.52,29.34,0,55.88l29.38,90.41H124.44l29.38-90.41L76.91,0Z',
      viewBox: '0 0 153.81 146.28'
    },
    {
      d: 'M70.81,1.52L3.29,50.58c-2.8,2.03-3.97,5.64-2.9,8.93l25.79,79.37c1.07,3.29,4.13,5.52,7.59,5.52H117.23c3.46,0,6.52-2.23,7.59-5.52l25.79-79.37c1.07-3.29-.1-6.89-2.9-8.93L80.2,1.52c-2.8-2.03-6.59-2.03-9.39,0Z',
      viewBox: '0 0 151.01 144.4'
    }
  ],
  hexagon: [
    {
      d: 'M127.84,0H42.61L0,73.81l42.61,73.81H127.84l42.61-73.81L127.84,0Z',
      viewBox: '0 0 170.45 147.61'
    },
    {
      d: 'M121.99,0H45.99c-2.85,0-5.49,1.52-6.91,3.99L1.07,69.81c-1.43,2.47-1.43,5.51,0,7.98l38,65.82c1.43,2.47,4.06,3.99,6.91,3.99H121.99c2.85,0,5.49-1.52,6.91-3.99l38-65.82c1.43-2.47,1.43-5.51,0-7.98L128.91,3.99c-1.43-2.47-4.06-3.99-6.91-3.99Z',
      viewBox: '0 0 167.98 147.61'
    }
  ],
  star8round: [
    {
      d: 'M73.14,0l14,39.35,37.72-17.93-17.93,37.72,39.35,14-39.35,14,17.93,37.72-37.72-17.93-14,39.35-14-39.35-37.72,17.93,17.93-37.72L0,73.14l39.35-14L21.42,21.42l37.72,17.93,5.94-16.7L73.14,0Z',
      viewBox: '0 0 146.28 146.28'
    },
    {
      d: 'M71.08,1.32l11.4,32.04c.39,1.11,1.66,1.63,2.72,1.12l30.72-14.6c1.68-.8,3.44,.96,2.64,2.64l-14.6,30.72c-.5,1.06,.02,2.32,1.12,2.72l32.04,11.4c1.76,.62,1.76,3.11,0,3.73l-32.04,11.4c-1.11,.39-1.63,1.66-1.12,2.72l14.6,30.72c.8,1.68-.96,3.44-2.64,2.64l-30.72-14.6c-1.06-.5-2.32,.02-2.72,1.12l-11.4,32.04c-.62,1.76-3.11,1.76-3.73,0l-11.4-32.04c-.39-1.11-1.66-1.63-2.72-1.12l-30.72,14.6c-1.68,.8-3.44-.96-2.64-2.64l14.6-30.72c.5-1.06-.02-2.32-1.12-2.72L1.32,71.08c-1.76-.62-1.76-3.11,0-3.73l32.04-11.4c1.11-.39,1.63-1.66,1.12-2.72l-14.6-30.72c-.8-1.68,.96-3.44,2.64-2.64l30.72,14.6c1.06,.5,2.32-.02,2.72-1.12l6.07-17.07,5.33-14.98c.62-1.76,3.11-1.76,3.73,0Z',
      viewBox: '0 0 138.43 138.43'
    }
  ],
  star8roundSmall: [
    {
      d: 'M29.2,29.2l10.16,29.95L0,73.14l39.35,14-10.16,29.95,29.95-10.16,14,39.35,14-39.35,29.95,10.16-10.16-29.95,39.35-14-39.35-14,10.16-29.95-29.95,10.16L73.14,0l-7.32,20.59-6.67,18.76-29.95-10.16Z',
      viewBox: '0 0 146.28 146.28'
    },
    {
      d: 'M27.88,29.13l9.2,27.14c.17,.51-.1,1.07-.6,1.25L.66,70.26c-.87,.31-.87,1.55,0,1.86l35.83,12.74c.51,.18,.78,.74,.6,1.25l-9.2,27.14c-.26,.77,.48,1.51,1.25,1.25l27.14-9.2c.51-.17,1.07,.1,1.25,.6l12.74,35.83c.31,.87,1.55,.87,1.86,0l12.74-35.83c.18-.51,.74-.78,1.25-.6l27.14,9.2c.77,.26,1.51-.48,1.25-1.25l-9.2-27.14c-.17-.51,.1-1.07,.6-1.25l35.83-12.74c.87-.31,.87-1.55,0-1.86l-35.83-12.74c-.51-.18-.78-.74-.6-1.25l9.2-27.14c.26-.77-.48-1.51-1.25-1.25l-27.14,9.2c-.51,.17-1.07-.1-1.25-.6L72.11,.66c-.31-.87-1.55-.87-1.86,0l-6.52,18.34-6.22,17.48c-.18,.51-.74,.78-1.25,.6l-27.14-9.2c-.77-.26-1.51,.48-1.25,1.25Z',
      viewBox: '0 0 142.37 142.37'
    }
  ],
  star8small: [
    {
      d: 'M73.14,0l14,39.35,37.72-17.93-17.93,37.72,39.35,14-39.35,14,17.93,37.72-37.72-17.93-14,39.35-14-39.35-37.72,17.93,17.93-37.72L0,73.14l39.35-14L21.42,21.42l37.72,17.93,5.94-16.7L73.14,0Z',
      viewBox: '0 0 146.28 146.28'
    },
    {
      d: 'M29.2,29.2l10.16,29.95L0,73.14l39.35,14-10.16,29.95,29.95-10.16,14,39.35,14-39.35,29.95,10.16-10.16-29.95,39.35-14-39.35-14,10.16-29.95-29.95,10.16L73.14,0l-7.32,20.59-6.67,18.76-29.95-10.16Z',
      viewBox: '0 0 146.28 146.28'
    }
  ],
  star10round: [
    {
      d: 'M68.67,0l11.16,37.87,31.28-24.08-13.23,37.19,39.46-1.09-32.57,22.31,32.57,22.31-39.46-1.09,13.23,37.19-31.28-24.08-11.16,37.87-11.16-37.87-31.28,24.08,13.23-37.19L0,94.51l32.57-22.31L0,49.89l39.46,1.09L26.23,13.79l31.28,24.08,4.56-15.47L68.67,0Z',
      viewBox: '0 0 137.33 144.4'
    },
    {
      d: 'M65.85,1.44l8.41,28.54c.4,1.35,2.03,1.88,3.14,1.02l23.58-18.15c1.58-1.22,3.78,.38,3.11,2.26l-9.97,28.03c-.47,1.33,.54,2.71,1.94,2.67l29.74-.82c2-.06,2.84,2.53,1.19,3.66l-24.54,16.81c-1.16,.8-1.16,2.51,0,3.31l24.54,16.81c1.65,1.13,.81,3.71-1.19,3.66l-29.74-.82c-1.41-.04-2.41,1.35-1.94,2.67l9.97,28.03c.67,1.88-1.53,3.48-3.11,2.26l-23.58-18.15c-1.12-.86-2.75-.33-3.14,1.02l-8.41,28.54c-.56,1.92-3.28,1.92-3.84,0l-8.41-28.54c-.4-1.35-2.03-1.88-3.14-1.02l-23.58,18.15c-1.58,1.22-3.78-.38-3.11-2.26l9.97-28.03c.47-1.33-.54-2.71-1.94-2.67l-29.74,.82c-2,.06-2.84-2.53-1.19-3.66l24.54-16.81c1.16-.8,1.16-2.51,0-3.31L.88,48.65c-1.65-1.13-.81-3.71,1.19-3.66l29.74,.82c1.41,.04,2.41-1.35,1.94-2.67L23.77,15.11c-.67-1.88,1.53-3.48,3.11-2.26l23.58,18.15c1.12,.86,2.75,.33,3.14-1.02l4.34-14.74L62.01,1.44c.56-1.92,3.28-1.92,3.84,0Z',
      viewBox: '0 0 127.86 134.23'
    }
  ],
  star10roundSmall: [
    {
      d: 'M68.67,0l-5.71,19.38-5.45,18.49L30.49,20.35l8.97,30.63L0,49.89l32.57,22.31L6.89,92.96l32.57,.46-13.23,37.19,31.28-24.08,11.16,31.31,11.16-31.31,31.28,24.08-13.23-37.19,32.57-.46-25.67-20.76,32.57-22.31-39.46,1.09,8.97-30.63-27.02,17.52L68.67,0Z',
      viewBox: '0 0 137.33 137.84'
    },
    {
      d: 'M65.38,.71l-6.19,21-3.64,12.37c-.19,.63-.93,.91-1.49,.55l-23.67-15.35c-.77-.5-1.75,.23-1.49,1.11l7.84,26.77c.19,.64-.31,1.29-.98,1.27l-34.74-.96c-.99-.03-1.4,1.25-.59,1.81l28.7,19.66c.55,.37,.58,1.17,.06,1.59L6.68,88.73c-.72,.58-.32,1.75,.61,1.76l28.45,.4c.68,0,1.15,.68,.92,1.32l-11.64,32.72c-.33,.93,.75,1.72,1.54,1.12l27.54-21.2c.53-.41,1.31-.18,1.54,.45l9.77,27.41c.31,.88,1.55,.88,1.86,0l9.77-27.41c.23-.63,1-.86,1.54-.45l27.54,21.2c.78,.6,1.87-.19,1.54-1.12l-11.64-32.72c-.23-.64,.24-1.31,.92-1.32l28.45-.4c.93-.01,1.33-1.18,.61-1.76l-22.51-18.21c-.52-.42-.48-1.21,.06-1.59l28.7-19.66c.81-.56,.4-1.83-.59-1.81l-34.74,.96c-.67,.02-1.17-.62-.98-1.27l7.84-26.77c.26-.88-.72-1.61-1.49-1.11l-23.67,15.35c-.56,.36-1.3,.08-1.49-.55L67.28,.71c-.28-.95-1.62-.95-1.9,0Z',
      viewBox: '0 0 132.65 133.37'
    }
  ],
  star10small: [
    {
      d: 'M68.67,0l11.16,37.87,31.28-24.08-13.23,37.19,39.46-1.09-32.57,22.31,32.57,22.31-39.46-1.09,13.23,37.19-31.28-24.08-11.16,37.87-11.16-37.87-31.28,24.08,13.23-37.19L0,94.51l32.57-22.31L0,49.89l39.46,1.09L26.23,13.79l31.28,24.08,4.56-15.47L68.67,0Z',
      viewBox: '0 0 137.33 144.4'
    },
    {
      d: 'M68.67,0l-5.71,19.38-5.45,18.49L30.49,20.35l8.97,30.63L0,49.89l32.57,22.31L6.89,92.96l32.57,.46-13.23,37.19,31.28-24.08,11.16,31.31,11.16-31.31,31.28,24.08-13.23-37.19,32.57-.46-25.67-20.76,32.57-22.31-39.46,1.09,8.97-30.63-27.02,17.52L68.67,0Z',
      viewBox: '0 0 137.33 137.84'
    }
  ]
};

var elementsNumber = 4;
var right = 0;
var wrong = 0;
var maxWrong = 3;
var countDown = 50;
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

// Variable aléatoire suivant la loi de Bernouilli
function getRandomBernouilli(p) {
  let random = getRandom();
  if (random < p) {
    return 1;
  } else {
    return 0;
  }
}

// Variable aléatoire suivant la loi Binomiale
function getRandomBinomiale(n, p) {
  let c = 0;
  for (let i = 0; i < n; i++) {
    c += getRandomBernouilli(p);
  }
  return c;
}

// Variable aléatoire suivant la loi Exponentielle
function getRandomExponential(rate) {
  return -Math.log(getRandom()) / rate;
}

// Variable aléatoire suivant la loi Géométrique
function getRandomGeometric(p) {
  let c = 0;
  random = getRandomBernouilli(p);
  while (random != 1) {
    random = getRandomBernouilli(p);
    c++;
  }
  return c;
}

// Variable aléatoire suivant la loi de Poisson
function getRandomPoisson(mean) {
  var L = Math.exp(-mean);
  var p = 1.0;
  var k = 0;

  do {
    k++;
    p *= Math.random();
  } while (p > L);

  return k - 1;
}

// Variable aléatoire suivant la loi de Rademacher
function getRandomRademacher(alpha) {
  let random = getRandom();
  if (random < alpha) {
    return 1;
  }
  return -1;
}

// Get random shape
function getRandomShape() {
  let random = getRandomPoisson(3);
  if (random == 0) {
    return 'square';
  } else if (random == 1) {
    return 'pentagone';
  } else if (random == 2) {
    return 'hexagon';
  } else if (random == 3) {
    return 'star8round'
  } else if (random == 4) {
    return 'star8roundSmall'
  } else if (random == 5) {
    return 'star8small'
  } else if (random == 6) {
    return 'star10round'
  } else if (random == 7) {
    return 'star10roundSmall'
  } else {
    return 'star10small'
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

  // Add Elements with random color, shape and speed
  let r = getRandomBinomiale(25, 0.9) * 10;
  let g = getRandomBinomiale(25, 0.2) * 10;
  let b = getRandomBinomiale(25, 0.3) * 10;
  let shape = getRandomShape();
  // exponential variation for the speed
  let speed = 10 - getRandomExponential(50) * 100;
  if (speed < 3) speed = 3;

  for (let i = 0; i < elementsNumber; i++) {
    addElement(list, r, g, b, shape, speed);
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
function addElement(list, r, g, b, shape, speed) {
  let element = document.createElement('div');
  element.classList.add('element');
  element.classList.add('rotating');
  element.style['-webkit-animation-duration'] = speed + 's';

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
  randomDiff = getRandomBetween(1, 3);

  // Different rotation
  if (randomDiff == 1) {
    element.style['-webkit-animation-name'] = 'rotating-inverse';
  }
  // Different shape
  else if (randomDiff == 2) {
    element.removeChild(element.firstChild);
    createSVG(element, shape, 1);
  }
  // Different color
  else {
    r += (10 + getRandomGeometric(0.1)) * getRandomRademacher(0.2);
    g += (10 + getRandomGeometric(0.04)) * getRandomRademacher(0.6);
    b += (10 + getRandomGeometric(0.04)) * getRandomRademacher(0.6);

    element.style.setProperty(
        '--background', 'rgb(' + r + ',' + g + ',' + b + ')');
  }
}

// Create SVG
function createSVG(element, shape, id) {
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('version', '1.0');
  svg.setAttribute('viewBox', SVGs[shape][id].viewBox);

  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', SVGs[shape][id].d);
  svg.appendChild(path);
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
  document.querySelector('#title').innerHTML = 'Sorry you lost...';
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