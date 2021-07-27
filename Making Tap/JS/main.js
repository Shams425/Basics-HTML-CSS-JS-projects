const button = document.querySelectorAll(".button");
const tabContents = document.querySelectorAll(".about");

button.forEach((press) => {
  press.onclick = () => {
      button.forEach((i) => {
        i.classList.remove("active");
        press.classList.add("active");
      });
      let index = press.getAttribute("data-number");
      tabContents.forEach((i) => i.classList.remove("info"));
      tabContents[index].classList.add("info");
    }
  });
