let container = document.querySelector('.container');

createGrid();

function createGrid(){
    let text = '';
    for (let i = 0; i < 9; i++) {
        text += `
            <div class="box"></div>
        `.trim()
    }
    container.innerHTML = text
}