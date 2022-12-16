// const color = document.querySelector('#color h1');
// const button = document.querySelector('#generator button');
const body = document.querySelector('body');
let speed = parseInt(prompt("Set your speed(in ms):"));

while (!speed) {
    speed = parseInt(prompt("Please give a numerical input(preferably <200ms):"));
}

let duration = parseInt(prompt("Set duration(in ms):"));

while (!duration) {
    duration = parseInt(prompt("Please give a numerical input(preferably <100000ms):"));
}

const id = setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    // color.innerText = `rgb(${red},${blue},${green})`;
    body.style.background = `rgb(${red},${blue},${green})`;
}, speed)

setTimeout(() => {
    clearInterval(id);
    const color = document.querySelector('#color h1');
    color.innerText = "Reload to try again";
}, duration);