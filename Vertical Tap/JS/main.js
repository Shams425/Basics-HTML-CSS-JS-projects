const button = document.querySelectorAll(".buttons button");
const content = document.querySelectorAll(".continer .content div");
let index = 0;

button.forEach((press) => {
    press.addEventListener("click", () => {
    button.forEach((i) => {i.classList.remove("active")})
    press.classList.add("active");

    index = press.getAttribute("data-type-number");
    content.forEach((cont) => { 
        cont.classList.remove("info")
        cont.style.transition =`all 0.3s ease-in`
    })
    content[index].classList.add("info");
    },false);
});