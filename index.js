let galler = document.querySelector('.gallery');
let right = document.querySelector('.right-move');
let left = document.querySelector('.left-move');

galler.addEventListener('wheel',(event)=>{
    const delta = Math.sign(event.deltaY);
    if(delta==-1){
        galler.style.scrollBehavior = "smooth";
        galler.scrollLeft += 400;
    }
    else{
        galler.style.scrollBehavior = "smooth";
        galler.scrollLeft -=400;
    }

})


left.addEventListener("click",(evt)=>{
    galler.style.scrollBehavior = "smooth";
    left.classList.add('fa-bounce')
    galler.scrollLeft -=400;
    setTimeout(() => {
        
        left.classList.remove('fa-bounce');
    }, 500);
})

right.addEventListener("click",()=>{
    galler.style.scrollBehavior = "smooth";
    right.classList.add('fa-bounce')
    galler.scrollLeft += 400;
    setTimeout(() => {
        right.classList.remove("fa-bounce")
    }, 500);
})