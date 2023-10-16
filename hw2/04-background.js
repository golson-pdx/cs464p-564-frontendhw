// Add your code here
const form = document.querySelector('.background');
const bodyElement = document.querySelector('body');
const input = document.querySelector("input[name='seconds']");
const button = document.querySelector('.submit');
let interval = 0;

// https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
const randomBetween = function randomBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

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
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    bodyElement.style.background = `rgba(${r}, ${g}, ${b}, 0.75)`;
}

form.addEventListener("submit", handleSubmit);