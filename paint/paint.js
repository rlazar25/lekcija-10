window.addEventListener('mousemove', drawLine);
let body = document.querySelector('body');

let rangeInput = document.querySelector('input[type="range"]');
let colorInput = document.querySelector('input[type=color]');
let colorInput2 = document.querySelector('input[type=color2]');
let rangeLabel = document.querySelector('label[for="range"]')
// let colorLabel

let r = 2;
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


function drawLine(e){
    if(e.altKey){
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = r + 'px'
        circle.style.height = r + 'px'
        circle.style.background = color
        circle.style.top = (e.y - (r/2)) + 'px';
        circle.style.left = (e.x  - (r/2)) + 'px';
        body.appendChild(circle)
    } else if(e.ctrlKey){
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = r + 'px'
        circle.style.height = r + 'px'
        circle.style.background = color2
        circle.style.top = (e.y - (r/2)) + 'px';
        circle.style.left = (e.x  - (r/2)) + 'px';
        body.appendChild(circle)
    }
}