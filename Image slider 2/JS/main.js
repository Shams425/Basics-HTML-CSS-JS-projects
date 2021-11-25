const continer = document.getElementById("continer")
const images = document.querySelectorAll(".imageSlider img")
const next = document.querySelector("#next")
const back = document.querySelector("#back")
let imgWidth = images[0].clientWidth;
let index = 1;

continer.style.transform = `translateX(${-imgWidth * index}px)`;

next.addEventListener("click", () => {
  if(index >= images.length - 1) return;
    index++;
    continer.style.transition = `all 0.3s ease-in-out`
    continer.style.transform = `translateX(${-imgWidth * index}px)`
})
back.addEventListener("click", () => {
  if(index <= 0) return;
  index--;
  continer.style.transition = `all 0.3s ease-in-out`
  continer.style.transform = `translateX(${-imgWidth * index}px)`
})

continer.addEventListener("transitionend", () => {
    if (images[index].id === "first") {
      continer.style.transition = `null`;
      index = images.length - index;
      continer.style.transform = `translateX(${-imgWidth * index}px)`;
    }
    if (images[index].id === "last") {
      continer.style.transition = `null`;
      index = images.length - 2;
      continer.style.transform = `translateX(${-imgWidth * index}px)`;
    }
})