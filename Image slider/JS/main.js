const slideRight = document.getElementById("slideRight");
const slideLeft = document.getElementById("slideLeft");
const continer = document.getElementById("continer");
const minContiner = document.querySelectorAll(".all-images .image")
const select = document.querySelectorAll(".all-images img");
const slide = document.querySelectorAll(".continer #slideImg .img");
let index = 0;
let curentWidth = continer.clientWidth;
let autoMove = setInterval (autoSlide,1000);

function autoSlide() {
        index++;
        if (index > minContiner.length - 1) {
            index = 0;
            select[index].classList.add("active");
            select[index + (select.length-1)].classList.remove("active");
        }
        if (index === 0) {select[index].classList.add("active")}
        else {
           select[index - 1].classList.remove("active");
           select[index].classList.add("active"); 
        }
        
    slide.forEach((elemnt) => {
        elemnt.style.transition = `all 0.3s ease-in-out`;
        elemnt.style.transform = `translateX(${-curentWidth * (index)}px)`;
    });
}

select.forEach((item, i) => {
    item.addEventListener("click", () => {
        minContiner.forEach((el) => { el.classList.remove("active") });
        item.classList.add("active");
        slide.forEach((elemnt) => {
            elemnt.style.transition = `all 0.3s ease-in-out`;
            elemnt.style.transform = `translateX(${-curentWidth * (i)}px)`;
        });
        clearInterval(autoMove);
    }, false);
});

slideRight.addEventListener("click", () => {
    minContiner.forEach((el) => { el.classList.remove("active") });
    index++;
    if (index > minContiner.length - 1) {
        index = 0;
        select[index].classList.add("active");
    }
    select[index].classList.add("active");
    slide.forEach((elemnt) => {
        elemnt.style.transition = `all 0.3s ease-in-out`;
        elemnt.style.transform = `translateX(${-curentWidth * (index)}px)`;
    });
    clearInterval(autoMove);
});

slideLeft.addEventListener("click", () => {
    minContiner.forEach((el) => { el.classList.remove("active") });
    index--;
    if (index < 0) {
        index = minContiner.length - 1;
        select[index].classList.add("active");
    }
    select[index].classList.add("active");
    slide.forEach((elemnt) => {
        elemnt.style.transition = `all 0.3s ease-in-out`;
        elemnt.style.transform = `translateX(${-curentWidth * (index)}px)`;
        clearInterval(autoMove);
    });
}, false);

