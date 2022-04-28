//Javascript

const container = document.querySelector('#container');

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let n = parseInt(prompt('Please choose the number or squares per side.', "0"), 10);
    if (n > 100) {
        alert("Please choose a smaller number.");
} //sets a limit on user input
    else console.log(n);
});//adds an event listener for button click

for (let i = 0; i < 256; i++) {
const square = document.createElement('div');
square.classList.add('square');

square.addEventListener('mouseenter', (e) => {
   e.target.style.background = 'red';
  });
container.appendChild(square);
}//creates 256 squares that change color when the mouse passes over them

