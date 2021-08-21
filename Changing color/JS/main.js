document.body.classList.add(localStorage.getItem('page-color') || "blue")
let pick = document.querySelectorAll('.switcher li'); 
let classeslist = [];

for( i = 0; i < pick.length; i = i + 1) {
    classeslist.push(pick[i].getAttribute('data-color'));
    pick[i].addEventListener("click",  function() {
        document.body.classList.remove(...classeslist);
        document.body.classList.add(this.getAttribute("data-color"));
        localStorage.setItem('page-color', this.getAttribute("data-color"));
    }, false);
}

const keep = document.getElementById("keep");
const pause = document.getElementById("pause");
let x = 0;

keep.onclick = () => {
    let intervalPause = setInterval(change,1000);
    function change() {
        document.body.classList.remove(...classeslist);
        document.body.classList.add(pick[x].getAttribute("data-color"));
        x = x + 1;
        if (x === pick.length) {
        x = 0;
        }
        pause.onclick = () => {
            clearInterval(intervalPause);
            x = x;
        } 
    }       
}




