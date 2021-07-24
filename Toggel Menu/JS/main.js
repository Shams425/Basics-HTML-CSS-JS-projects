const slideMenu = document.querySelector("#icons");
const links = document.getElementById("links");
const section = document.querySelectorAll('a');

slideMenu.addEventListener("click", () => {
    document.body.classList.toggle("active");
    links.style.transition = "all 0.3s ease-in";
});
