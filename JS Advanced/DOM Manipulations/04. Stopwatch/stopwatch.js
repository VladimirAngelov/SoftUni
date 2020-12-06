function stopwatch() {
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn')
    let timer = document.getElementById('time');
    let seconds = 0;
    let minutes = 0;
    let interval = '';

    let isStopped = true;
    startButton.addEventListener('click', () => {
        if (isStopped) {
            timer.textContent = '00:00'
            seconds = 0;
            minutes = 0;
        }
        interval = setInterval(() => {
            seconds++
            if (seconds < 10) {
                timer.textContent = `0${minutes}:0${seconds}`
            } else {
                timer.textContent = `0${minutes}:${seconds}`
            }
            if (seconds > 59) {
                seconds = 0;
                minutes++
                timer.textContent = `0${minutes}:0${seconds}`
            }

            if (minutes > 9 && seconds > 9) {
                timer.textContent = `${minutes}:${seconds}`
            } else if (minutes > 9 && seconds < 10) {
                timer.textContent = `${minutes}:0${seconds}`
            }
        }, 1000)
        stopButton.disabled = false;
        startButton.disabled = true;
    })

    stopButton.addEventListener('click', () => {
        clearInterval(interval);
        stopButton.disabled = true;
        startButton.disabled = false;
        isStopped = true;
    })
}