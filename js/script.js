const side_nav = document.querySelector(".side-nav")
const menu = document.getElementById("menu")

menu.onclick = () => side_nav.classList.toggle("side-nav-open")

const nav = document.querySelector("nav")
const SCROLL_POINT_Y = 16
window.addEventListener("scroll", () => {
    this.scrollY > SCROLL_POINT_Y ? nav.classList.add("nav-scroll") : nav.classList.remove("nav-scroll")
})

// swiper logic
var swiper = new Swiper(".mySwiper", {
    lazy: true,
    loop:true,
    autoplay:{
        delay:2000
    },
    pagination: {
        el: ".swiper-pagination",
        slidesPerView: 1,
        spaceBetween: 100,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//         1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//         },
//     },
// });