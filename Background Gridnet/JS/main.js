const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const changeColor = document.querySelector(".background");


function getvalue() {
    changeColor.style.background = `linear-gradient(
        to bottom,
        ${color1.value} ${color1_percent.value}%,
        ${color2.value} ${color2_percent.value}%`;
        //check if the background has a red color!
    let red1 = HextoRGB(color1.value).r;     // to pick the value of red from the returing object of the function
    let red2 =  HextoRGB(color2.value).r;
    if ((red1 > 60) || (red2) > 60) {
        document.querySelector("h2").style.color = "#b1f32b";
        document.querySelectorAll("i").forEach((icon) => {
            icon.style.color = "#b1f32b";
        })
    } 
    else {
        document.querySelector("h2").style.color = null;
        document.querySelectorAll("i").forEach((icon) => {
            icon.style.color = null;
        });
    changeColor.style.transition= `all 0.5s ease-in`;
    }
}

color1.addEventListener("input", getvalue);
color2.addEventListener("input", getvalue);


// change the direction of gradient
const up = document.querySelector(".direction .top")
const down = document.querySelector(".direction .bottom")
const right = document.querySelector(".direction .right")
const left = document.querySelector(".direction .left")
let currentDirection = "bottom"; // the defualt value

up.addEventListener('click' , () => {
    currentDirection = up.classList;
    changeColor.style.background = `linear-gradient(
        to top,
        ${color1.value}  ${color1_percent.value}%,
        ${color2.value}  ${color2_percent.value}%`
});
down.addEventListener('click' , () => {
    currentDirection = down.classList;
    changeColor.style.background = `linear-gradient(
        to bottom,
        ${color1.value}  ${color1_percent.value}%,
        ${color2.value}  ${color2_percent.value}%`
        
});
left.addEventListener('click' , () => {
    currentDirection = left.classList;
    changeColor.style.background = `linear-gradient(
        to left,
        ${color1.value}  ${color1_percent.value}%,
        ${color2.value}  ${color2_percent.value}%`
});
right.addEventListener('click' , () => {
    currentDirection = right.classList;
    changeColor.style.background = `linear-gradient(
        to right,
        ${color1.value}  ${color1_percent.value}%,
        ${color2.value}  ${color2_percent.value}%`
        console.log(currentDirection)
});

// change the percent of gradient 
let color1_percent = document.querySelector(".percent .color1 input");
let color1_value = document.querySelector(".percent .color1 span");
let color2_percent = document.querySelector(".percent .color2 input");
let color2_value = document.querySelector(".percent .color2 span");

function color1percent() {
    color1_percent.addEventListener("input" , () => {
        color2_percent.value = 100 - (color1_percent.value - 1)
    });
    changeColor.style.background = `linear-gradient(
        to ${currentDirection},
        ${color1.value}  ${color1_percent.value}%,
        ${color2.value}  ${color2_percent.value}%`;
    color1_value.innerHTML = color1_percent.value;
    color2_value.innerHTML = color2_percent.value;
}
function color2percent() {
    color2_percent.addEventListener("input" , () => {
        color1_percent.value = 100 - (color2_percent.value - 1)
    });
    changeColor.style.background = `linear-gradient(
        to ${currentDirection},
        ${color1.value}  ${color1_percent.value}%,
        ${color2.value}  ${color2_percent.value}%`;
    color2_value.innerHTML = color2_percent.value;
    color1_value.innerHTML = color1_percent.value;
}

color1_percent.addEventListener("input" ,color1percent);
color2_percent.addEventListener("input" ,color2percent);

// the function returing an objuct with the { red: green:  blue: }
function HextoRGB(hex) {
	let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(r,g,b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}
