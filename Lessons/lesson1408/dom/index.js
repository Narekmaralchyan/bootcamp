const toggleButton = document.getElementById('toggle_button');
const restartButton = document.getElementById('restart_button');
const counter = document.getElementById('counter');

let count = 0;
let startIntervalId;
let isStarted = false;
function toggleButtonListener(evn) {
    if (isStarted){
        clearInterval(startIntervalId);
        toggleButton.innerText = 'Start';
        isStarted = false;
    }else{
        toggleButton.innerText = 'Stop';
        isStarted = true;
        startIntervalId = setInterval(() => {
            count++;
            counter.innerText = String(count);
        }, 1000);
    }
}

function restartButtonListener() {
    count = 0;
    counter.innerText = String(count);
    clearInterval(startIntervalId);
    isStarted = false;
    toggleButtonListener();
}

toggleButton.addEventListener('click', toggleButtonListener);
restartButton.addEventListener('click', restartButtonListener);


