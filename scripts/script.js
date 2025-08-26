const turnOn = document.createElement('button');
turnOn.style.marginRight = '10px';
turnOn.textContent = 'Turn On';
document.body.appendChild(turnOn);

const turnOff = document.createElement('button');
turnOff.style.marginRight = '10px';
turnOff.textContent = 'Turn Off';
document.body.appendChild(turnOff);

const changeColorButton = document.createElement('button');
changeColorButton.style.marginRight = '10px';
changeColorButton.textContent = 'Change Color';
document.body.appendChild(changeColorButton);

const turnOnTrafficLightButton = document.createElement('button');
turnOnTrafficLightButton.style.marginRight = '10px';
turnOnTrafficLightButton.textContent = 'Start Traffic Light';
document.body.appendChild(turnOnTrafficLightButton);

const turnOffTrafficLightButton = document.createElement('button');
turnOffTrafficLightButton.textContent = 'Stop Traffic Light';
document.body.appendChild(turnOffTrafficLightButton);



let currentColor = 'transparent';

const redLight = document.createElement('div');
redLight.style.marginTop = '10px';
redLight.className = 'light-red';
redLight.style.width = '100px';
redLight.style.height = '100px';
redLight.style.backgroundColor = currentColor;
redLight.style.border = '1px solid black';
redLight.style.borderRadius = '50%';
document.body.appendChild(redLight);

const yellowLight = document.createElement('div');
yellowLight.className = 'light-yellow';
yellowLight.style.width = '100px';
yellowLight.style.height = '100px';
yellowLight.style.backgroundColor = 'transparent';
yellowLight.style.border = '1px solid black';
yellowLight.style.borderRadius = '50%';
document.body.appendChild(yellowLight);

const greenLight = document.createElement('div');
greenLight.className = 'light-green';
greenLight.style.width = '100px';
greenLight.style.height = '100px';
greenLight.style.backgroundColor = 'transparent';
greenLight.style.border = '1px solid black';
greenLight.style.borderRadius = '50%';
document.body.appendChild(greenLight);

turnOn.addEventListener('click', () => {
  redLight.style.backgroundColor = 'red';
  yellowLight.style.backgroundColor = 'transparent';
  greenLight.style.backgroundColor = 'transparent';
  currentColor = 'red';
  isTrafficLightOn = true;
});

turnOff.addEventListener('click', () => {
  redLight.style.backgroundColor = 'transparent';
  yellowLight.style.backgroundColor = 'transparent';
  greenLight.style.backgroundColor = 'transparent';
  currentColor = 'transparent';
  isTrafficLightOn = false;
});

changeColorButton.addEventListener('click', () => {
  if (currentColor === 'red') {
    redLight.style.backgroundColor = 'transparent';
    yellowLight.style.backgroundColor = 'yellow';
    greenLight.style.backgroundColor = 'transparent';
    currentColor = 'yellow';
  } else if (currentColor === 'yellow') {
    redLight.style.backgroundColor = 'transparent';
    yellowLight.style.backgroundColor = 'transparent';
    greenLight.style.backgroundColor = 'green';
    currentColor = 'green';
  } else if (currentColor === 'green') {
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'transparent';
    greenLight.style.backgroundColor = 'transparent';
    currentColor = 'red';
  }
});

turnOnTrafficLightButton.addEventListener('click', () => {
  redLight.style.backgroundColor = 'transparent';
  yellowLight.style.backgroundColor = 'transparent';
  greenLight.style.backgroundColor = 'transparent';

  if (isTrafficLightOn === true) {
    setTimeout(() => {
      redLight.style.backgroundColor = 'red';

      start = setInterval(() => {
        changeColorButton.click();
      }, 1000);
    }, 1000);
  }
});

turnOffTrafficLightButton.addEventListener('click', () => {
  redLight.style.backgroundColor = 'transparent';
  yellowLight.style.backgroundColor = 'transparent';
  greenLight.style.backgroundColor = 'transparent';
  clearInterval(start);

  stop = setTimeout(() => {
    currentColor = 'red';
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'transparent';
    greenLight.style.backgroundColor = 'transparent';
  }, 1000);
});