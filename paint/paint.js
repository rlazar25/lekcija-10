window.addEventListener('mousemove', drawLine);
window.addEventListener('click', makeCircle);
let body = document.querySelector('body');

let rangeInput = document.querySelector('input[type="range"]');
let colorInput = document.querySelector('input[type=color]');
let colorInput2 = document.querySelector('input[type=color2]');
let rangeLabel = document.querySelector('label[for="range"]')
// let colorLabel

let r = 10;
let color = '#000000'
let color2 = '#ff0000'

rangeInput.addEventListener('input', function(e){
    r = parseInt(this.value);
    rangeLabel.innerHTML = `Circle is ${r}px`
})

colorInput.addEventListener('input', function(e){
    color = this.value
})
colorInput2.addEventListener('input', function(e){
    color2 = this.value
})

function makeCircle(){
        let circle = document.createElement('div');
        circleLine.classList.add('circle');
        circleLine.style.width = r + 'px'
        circleLine.style.height = r + 'px'
        circleLine.style.background = color
        circleLine.style.top = (e.y - (r/2)) + 'px';
        circleLine.style.left = (e.x  - (r/2)) + 'px';
        body.appendChild(circle)

}


function drawLine(e){
    if(e.altKey){
        let circleLine = document.createElement('div');
        circleLine.classList.add('circle');
        circleLine.style.width = r + 'px'
        circleLine.style.height = r + 'px'
        circleLine.style.background = color
        circleLine.style.top = (e.y - (r/2)) + 'px';
        circleLine.style.left = (e.x  - (r/2)) + 'px';
        body.appendChild(circleLine)
    } else if(e.ctrlKey){
        let circleLine = document.createElement('div');
        circleLine.classList.add('circle');
        circleLine.style.width = r + 'px'
        circleLine.style.height = r + 'px'
        circleLine.style.background = color2
        circleLine.style.top = (e.y - (r/2)) + 'px';
        circleLine.style.left = (e.x  - (r/2)) + 'px';
        body.appendChild(circleLine)
    }
}