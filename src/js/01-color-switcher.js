const body  = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stopt = document.querySelector('[data-stop]');

start.addEventListener('click', changeColor);

function changeColor (e) {
    body.style.backgroundColor = getRandomHexColor()
    if (e.target === start) {
        return start.setAttribute('disabled', 'true')
    }
     if (e.target === stopt) {
        return setAttribute('disabled', 'true')
    }
    setInterval(changeColor,1000);
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
