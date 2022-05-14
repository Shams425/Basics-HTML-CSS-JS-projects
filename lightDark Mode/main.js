const switchContainer = document.querySelector(".switchMode .container");
const switchBtn = document.getElementById("switchBtn");

switchContainer.addEventListener("click", () => {
  switchBtn.classList.toggle("switch");
  document.body.classList.toggle("dark");
});
