let timer;
let isRunning = false;
let isPaused = false;
let timeLeft = 240 * 60;

const timerElement = document.getElementById('timer');
const startPauseButton = document.getElementById('start-pause');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startPauseTimer() {
    if (!isRunning) {
        isRunning = true;
        isPaused = true;
        startPauseButton.textContent = "Pause"
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft -= 1;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                isPaused = true;
                startPauseButton.textContent = 'Start';
                alert("Time's up!");
            }
        }, 1000);
    }
}

startPauseButton.addEventListener('click', startPauseTimer);

// Initialize the display
updateTimerDisplay();
