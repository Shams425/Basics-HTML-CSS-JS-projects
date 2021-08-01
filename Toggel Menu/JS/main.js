const icons = document.querySelectorAll(".icons span"); 
const slideMenu = document.querySelector(".icons")
const links = document.getElementById("links");
const slideLinks = document.querySelectorAll(".slideMenu li")

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        document.body.classList.toggle("active");
        links.style.transition = "all 0.3s ease-in";
    });
})
slideMenu.addEventListener("click", () => {
    document.body.classList.toggle("active");
    links.style.transition = "all 0.3s ease-in";
});

slideLinks.forEach((link) => {
    link.addEventListener("click" , () => {
        document.body.classList.remove("active")
    })
})

window.onclick = (el) => {
    if(!el.target.matches("header") && !el.target.matches(".slideMenu") &&!el.target.matches(".icons") && !el.target.matches("span")) {
        document.body.classList.remove("active")
    }
}