//Javascript

const container = document.querySelector('#container');

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let n = parseInt(prompt('Please choose the number or squares per side.', "0"), 10);
    console.log(n);
    if ((n > 100) || (n < 0)) {
        alert("Please choose a number between 0 and 100.");
}//sets a limit on user input
});//adds an event listener for button click

for (let i = 0; i < 256; i++) {
const square = document.createElement('div');
square.classList.add('square');

square.addEventListener('mouseenter', (e) => {
   e.target.style.background = 'red';
  });
container.appendChild(square);
}//creates 256 squares that change color when the mouse passes over them

