const menuBar = document.querySelector(".header-top>i")
const closeMenuBar = document.querySelector(".header-top ul>i")

menuBar.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.transform="translateX(0%)"
    document.querySelector(".header-top ul").style.opacity="1"

})

closeMenuBar.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.transform="translateX(100%)"
    document.querySelector(".header-top ul").style.opacity="0"
})

