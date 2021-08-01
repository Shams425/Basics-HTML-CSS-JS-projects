const button = document.querySelectorAll(".buttons button");
const modal = document.querySelectorAll(".modal");
const leave = document.querySelectorAll(".heading button");
const quit = document.querySelector(".overlay");
let index = 0;

button.forEach((press) => {
    press.addEventListener("click" , () => {
        document.body.classList.add("active");
        document.querySelector(press.dataset.target).classList.add("active")
    },false);
})

leave.forEach((el) => {
    el.addEventListener ("click", () => {
        document.body.style.transition = `all 0.3 ease-out`
        document.body.classList.remove("active");
        modal.forEach((i) => i.classList.remove("active"));
    },false);
})

window.onclick = (event) => {
    if (event.target == quit) {
        const models = document.querySelectorAll(".modal")
        models.forEach((i) => i.classList.remove("active"))
        document.body.classList.remove("active")
    }
}
