//Javascript

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
    }
}

function changeSize(input){
populateBoard(input);
}

populateBoard(16);
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let n = prompt('Please choose the number of squares per side.', "0");
    document.getElementById('container').style.width = n + "em";//the value of user input is used to adjust the width
    document.getElementById('container').style.height = n + "em";//the value of user input is used to adjust the height
    
    n = parseInt(n, 10);//converts the n string to a number for further use
    
    if ((n > 0) && (n <= 100)) {//tests the value of n
        for (let a = 0; a < n; a++){
        console.log(n);//for reference
            for (i = 0; i < n; i++){//creates a grid
                const square = document.createElement('div');
                square.classList.add('square');

                square.addEventListener('mouseenter', (e) => {
                    e.target.style.background = 'red';
                });
                container.appendChild(square);
            }
            }
        };
        })
