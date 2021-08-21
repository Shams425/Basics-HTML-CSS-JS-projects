const input = document.getElementById("inputText");
const tracker = document.getElementById("Tracker");

window.onclick  = () => {
    input.focus();
    input.oninput = () => {
    let value = input.value;
    tracker.textContent = value.toString();
    };
}