let container = document.querySelector('.container');
let playBtn = document.querySelector('button');

playBtn.addEventListener('click', playAgain)
playBtn.style.display = 'none'


createGrid();
let counter = 0;
let allBoxes = document.querySelectorAll('.box')
let symbol = 'O'
let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
allBoxes.forEach(box => box.addEventListener('click', insertSymbol))


function insertSymbol(){
    this.removeEventListener('click', insertSymbol)
    if (symbol === 'X'){
        symbol = 'O'
    } else {
        symbol = 'X'
    }
    this.innerHTML = symbol;
    checkWins();
    counter++
}

function checkWins(){
    lines.forEach(line => {
        let box1 = allBoxes[line[0]];
        let box2 = allBoxes[line[1]];
        let box3 = allBoxes[line[2]];
        console.log(counter)
        if(counter===8){
            stopClicks()
        }
        if (box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML && box1.innerHTML !== ''){
            box1.style.background = 'tomato';
            box2.style.background = 'tomato';
            box3.style.background = 'tomato';

            stopClicks();
        }
    })

}

function stopClicks(){
    allBoxes.forEach(box => box.removeEventListener('click', insertSymbol));
    playBtn.style.display = 'block';
}

function playAgain(){
    allBoxes.forEach(box => {
        box.innerHTML = '';
        box.style.background = 'cadetblue'
        box.addEventListener('click', insertSymbol);
        playBtn.style.display = 'none'
    })
}

function createGrid(){
    let text = '';
    for (let i = 0; i < 9; i++) {
        text += `
            <div class="box" style="cursor: pointer"></div>
        `.trim()
    }
    container.innerHTML = text

}