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

work_row_observer()