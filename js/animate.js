function work_row_observer() {
    const SHOW_CLASS = "works-row-show"
    const divObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(SHOW_CLASS)
                console.log(entry.target)
            }
            else {
                entry.target.classList.remove(SHOW_CLASS)
            }
        })
    }, {
        threshold: 0.5
    })

    const works = document.querySelectorAll(".works-row-hidden")
    works.forEach(entry => divObserver.observe(entry))
}

function header_obser(){
    const FADE_CLASS = "fade"
    const headerObserver = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            entry.isIntersecting ? entry.target.classList.add(FADE_CLASS) :  entry.target.classList.remove(FADE_CLASS)
        })
    },{
        threshold:1
    })
    const headers = document.querySelectorAll(".hidden")
    headers.forEach(entry=>{
        headerObserver.observe(entry)
    })
}

work_row_observer()

header_obser()