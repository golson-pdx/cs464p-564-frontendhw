// Add your code here
const form = document.querySelector('.background');
const bodyElement = document.querySelector('body');
const colors = ["blue", "green", "purple", "red"];

const handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log("We here");
    startInterval();
}

const startInterval = function startInterval() {
    const i = 0;
    setInterval(changeColor, 1000);
}

const changeColor = function changeColor() {
    console.log("Change color");
    const i = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    bodyElement.style.backgroundColor = colors[i];
}

form.addEventListener("submit", handleSubmit);