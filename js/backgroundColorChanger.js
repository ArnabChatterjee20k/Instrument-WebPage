root = document.querySelector(":root")

const rootStyles = getComputedStyle(root)

primaryColor = rootStyles.getPropertyValue("--primary-col")
secondaryColor = rootStyles.getPropertyValue("--secondary-col")
primaryBg = rootStyles.getPropertyValue("--primary-bg")


window.addEventListener("scroll",()=>{
    this.scrollY>300?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme")
})