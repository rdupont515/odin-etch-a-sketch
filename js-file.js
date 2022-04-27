//Javascript

const container = document.querySelector('#container');

for (let i = 0; i < 33; i++) {
const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);
}//creates 32 squares, but they are inline