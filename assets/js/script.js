document.querySelector(".btn-menu").addEventListener("click",()=>{
    let menu = document.querySelector(".mobile-menu")
    let navList = document.querySelector(".nav-list")
    
    if(menu.style.display == "flex"){
        menu.style.display = "none"
        navList.style.display = "flex"
    }else{
        menu.style.display = "flex"
        navList.style.display = "none"
    }
})