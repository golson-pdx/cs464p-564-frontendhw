// Declare values for elements on the background page
const form = document.querySelector('.background');
const bodyElement = document.querySelector('body');
const input = document.querySelector("input[name='seconds']");
const button = document.querySelector('.submit');

// Declare initial interval value at 0 so we know if the value has changed when toggling settings
let interval = 0;

// https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
// Random function to select value between min and max
const randomBetween = function randomBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

// Cont'd from above - function to generate a random RGBA code for color
const randomColor = function randomColor() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgba(${r}, ${g}, ${b}, 0.75)`;
}

// Function that toggles values on button between starting and stopping background color change intervals
const buttonStop = function buttonStop(changeToStop) {
    if (changeToStop) {
        button.classList.replace('btn-success', 'btn-danger');
        button.value = 'Stop';
    } else {
        button.classList.replace('btn-danger', 'btn-success');
        button.value = 'Start';
    }
}

// Function that changes the color of the background element
const changeColor = function changeColor() {
    bodyElement.style.background = randomColor();
}

// Function that begins interval based on form's seconds value and multiplies by 1000 to convert to millisecond value
const startInterval = function startInterval() {
    const i = 0;
    interval = setInterval(changeColor, input.value * 1000);
    buttonStop(true);
}

// Stops interval
const stopInterval = function stopInterval() {
    clearInterval(interval);
    interval = 0;
    buttonStop(false);
}

// Function that handles the submit event
const handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    if (interval === 0) {
        bodyElement.style.background = randomColor();
        startInterval();
    } else {
        stopInterval();
    }
}

form.addEventListener("submit", handleSubmit);