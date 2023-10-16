// Add your code here
const form = document.querySelector('.background');
const bodyElement = document.querySelector('body');
const input = document.querySelector("input[name='seconds']");
const colors = ["blue", "green", "purple", "red"];
const button = document.querySelector('.submit');
let interval = 0;

const buttonStop = function buttonStop(changeToStop) {
    if (changeToStop) {
        button.classList.replace('btn-success', 'btn-danger');
        button.value = 'Stop';
    } else {
        button.classList.replace('btn-danger', 'btn-success');
        button.value = 'Start';
    }
}

const handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log("We here");
    if (interval === 0) {
        startInterval();
    } else {
        stopInterval();
    }
}

const startInterval = function startInterval() {
    const i = 0;
    interval = setInterval(changeColor, input.value * 1000);
    buttonStop(true);
}

const stopInterval = function stopInterval() {
    clearInterval(interval);
    buttonStop(false);
}

const changeColor = function changeColor() {
    console.log("Change color");
    const i = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    bodyElement.style.backgroundColor = colors[i];
}

form.addEventListener("submit", handleSubmit);