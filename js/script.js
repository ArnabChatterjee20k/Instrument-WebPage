const side_nav = document.querySelector(".side-nav")
const menu = document.getElementById("menu")

menu.onclick = ()=> side_nav.classList.toggle("side-nav-open")

const nav = document.querySelector("nav")
const SCROLL_POINT_Y = 16
window.addEventListener("scroll",()=>{
    this.scrollY > SCROLL_POINT_Y ? nav.classList.add("nav-scroll") : nav.classList.remove("nav-scroll")
})