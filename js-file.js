//Javascript

//creates a square grid that can be drawn on and removes any previous grids
function populateBoard(size){
    const board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');

    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size
    for (let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square);
        square.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'red';
        });
    }
}

//function to make changes
function changeSize(input){
populateBoard(input);
}

//creates a 16x16 grid to start the board
populateBoard(16);

//whenever the button is selected a prompt allows for a value to be selected and used to change the grid
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let n = prompt('Please choose the number of squares per side.', "0");
    
    //converts the n string to a number for further use
    n = parseInt(n, 10);
    
    //tests the value of n
    if ((n > 0) && (n <= 100)) {
       changeSize(n);
            } else alert('Choose a number between 0 and 100.')
})

