const body  = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stopt = document.querySelector('[data-stop]');

start.addEventListener('click', onStart);

let onInterval = false;
stopt.disabled = true;

function onStart() {
    const IntId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        onInterval = true;
        console.log('I am ON');

        if (onInterval) {
            start.disabled = true;
            stopt.disabled = false;
        } 

        stopt.addEventListener('click', onStop);
        function onStop() {
            clearInterval(IntId);
            onInterval = false;
            start.disabled = false;
            stopt.disabled = true;
        }
    }, 1000);
}



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
