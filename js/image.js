const Lazy_LOADER_CLASS = "lazy-load"
const LOADER_SPINNER = "swiper-lazy-preloader"

let imgObserver = new IntersectionObserver((entries,observer)=>{
    // entries is an array
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            // console.log(entry.target)
            entry.target.classList.remove(Lazy_LOADER_CLASS)
            entry.target.classList.remove(LOADER_SPINNER)
            entry.target.src = entry.target.getAttribute("data-src")
            observer.unobserve(entry.target)
        }
    })
},{
    rootMargin:"50%"
})

let images = document.querySelectorAll(`.${Lazy_LOADER_CLASS}`)
images.forEach(img=>{
    imgObserver.observe(img)
})