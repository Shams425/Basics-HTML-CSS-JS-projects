function slide()  {
    const slideMenu = document.querySelector(".SlideMenu");
    const icon = document.querySelector(".header button");
    const links = document.querySelectorAll(".SlideMenu ul li")
    slideMenu.classList.toggle("active");
    icon.addEventListener("click" , () => {
        slideMenu.classList.remove("active")
    })
    links.forEach((link) => {
        link.addEventListener("click", () => {
            slideMenu.classList.remove("active")
        })
    })
}

window.onclick = (el) => {
    if(!el.target.matches(".SlideMenu") && !el.target.matches("button") && !el.target.matches("a")) {
        document.querySelector(".SlideMenu").classList.remove("active");
    }

}