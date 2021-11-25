const topBtn = document.getElementById("top")
let scrollY = 0;

window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    if (scrollY > 100) {
        topBtn.classList.add("active")
    }
    else {
        topBtn.classList.remove("active")
    }
})

topBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})