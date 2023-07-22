const limitInput = document.getElementById('limit');
const start = document.getElementById('btnStart');
const clock = document.getElementById('clock');
let interval;
function startTimer() {
    clearInterval(interval);
    clock.className = 'running';
    const timeLimit = parseInt(limitInput.value);
    let time = 0;

    interval = setInterval(() => {
        time++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if(time === timeLimit){
            clearInterval(interval);
            clock.innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
            clock.className = 'stopped';
        } else {
            clock.innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
        }
    }, 1000);
}

function formatTime(time){
    return (time < 10 ? "0" : "" ) + time;
}
start.addEventListener('click', startTimer);
