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

function myFunction(x) {
    x.classList.toggle("change");
}
document.querySelector(".container").addEventListener("click",()=>{
    document.querySelector('.ham-menu').classList.toggle('active')   
})

document.querySelectorAll(".ham-item").forEach((item,index)=>{
    item.addEventListener("click",()=>{
        if(document.querySelectorAll('.submenu')[index].style.display=="block")
        document.querySelectorAll('.submenu')[index].style.display="none";
        else
        document.querySelectorAll('.submenu')[index].style.display="block";

    })
    
})
