const input = document.getElementById("inputText");
const tracker = document.getElementById("Tracker");
const lettersCount = document.querySelector(".lettersCount");
const wordsCount = document.querySelector(".wordsCount");

input.oninput = () => {
  let value = input.value;
  tracker.textContent = value;

  //letter calc
  lettersCount.textContent = value.length;

  //filtering the extra spaces
  let allWords = value.split(" ");
  wordsCount.textContent = allWords.filter((word) => word != "").length;
};
