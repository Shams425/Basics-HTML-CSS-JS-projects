const slideMenu = document.querySelector("#icons");
const links = document.getElementById("links");
const icons = document.querySelector("span");

slideMenu.addEventListener("click", (e) => {
    document.body.classList.toggle("active");
    links.style.transition = "all 0.3s ease-in";
    if (e.target.matches("links")) { 
        window.onclick = () => {
        document.body.classList.remove("active");
        }
    }
})
