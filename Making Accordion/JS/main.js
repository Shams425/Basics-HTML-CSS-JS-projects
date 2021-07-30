const contents = document.querySelectorAll(".content");
const icons = document.querySelectorAll("i");
const header = document.querySelectorAll(".accordion");
let index = 0;
let iconClick = 0;

header.forEach((btn) => {
    btn.addEventListener("click", (click) => {
        contents.forEach((el) => {
        if (click.target.nextElementSibling !== el && el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      index = btn.getAttribute("data-number");
      header[index].classList.toggle("active");
      contents[index].classList.toggle("active");
    });
    icons.forEach((icon) => {
      icon.addEventListener("click" , () => {
        iconClick = icon.getAttribute("data-number");
        header[iconClick].classList.toggle("active");
        contents[iconClick].classList.toggle("active");
    })
  })
});



window.onclick = (el) => {
    if (!el.target.matches(".accordion-button") && !el.target.matches("i")) {
        contents.forEach((i) => i.classList.remove("active"));
        header.forEach((i) => i.classList.remove("active"))
    }
}