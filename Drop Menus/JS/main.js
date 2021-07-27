const button = document.querySelectorAll(".continer button");
const dropMenu = document.querySelectorAll(".continer .content");
let index = 0;

button.forEach((press) => {
    press.addEventListener("click" , ()=> {
        dropMenu.forEach((i) => i.classList.remove("active"));
        index = press.getAttribute("data-type-number");
        dropMenu[index].classList.toggle("active")
        })
});
window.onclick = (el) => {
    if (!el.target.matches('.continer button')) {
    dropMenu.forEach((i) => i.classList.remove("active")); 
    }    
}
