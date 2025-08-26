const changeColorButton = document.createElement('button');
changeColorButton.textContent = 'Change Color';
document.body.appendChild(changeColorButton);

let currentColor = 'red';

const redLight = document.createElement('div');
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
