let one = document.querySelector('.one');

one.addEventListener('click', function(e){
    if(e.altKey){
        this.style.background = 'blue'
    }else if(e.ctrlKey){
        this.style.background = 'green'
    } else{
        this.style.background = 'red'
    }
})  