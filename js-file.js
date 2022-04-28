//Javascript

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
const square = document.createElement('div');
square.classList.add('square');

square.addEventListener('mouseenter', (e) => {
   e.target.style.background = 'red';
    console.log("Good Job.");
  });
container.appendChild(square);
}//creates 256 squares that change color when the mouse passes over them

