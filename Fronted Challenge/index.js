window.addEventListener("scroll",()=>{
    if(window.scrollY>100)
    {
        nav=document.getElementsByClassName("nav");
        nav[0].classList.add("nav-hide");
    }
    else if(window.scrollY<100){
        nav=document.getElementsByClassName("nav");
        nav[0].classList.remove("nav-hide");
    }
})
