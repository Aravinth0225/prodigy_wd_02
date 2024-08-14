const stopwatchDuration = document.getElementById("stopwatchDuration"),
    start = document.getElementById("start"),
    lap = document.getElementById("lap"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    laps = document.getElementById("laps");

let hrs = 0,
    mins = 0,
    sec = 0,
    ms = 0,
    timeInterval;

// Start button functionality
start.onclick = () => {
    timeInterval = setInterval(() => {
        ms++;
        if (ms == 100) {
            sec++;
            ms = 0;
        }
        if (sec == 60) {
            mins++;
            sec = 0;
        }
        if (mins == 60) {
            hrs++;
            mins = 0;
        }
        stopwatchDuration.innerHTML = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
    }, 10);

    start.style.display = "none";
    stop.style.display = "inline";
    lap.style.display = "inline";
    reset.style.display = "none";
};

// Stop button functionality
stop.onclick = () => {
    clearInterval(timeInterval);

    start.style.display = "inline";
    stop.style.display = "none";
    lap.style.display = "none";
    reset.style.display = "inline";
};

// Lap button functionality
lap.onclick = () => {
    const lapTime = document.createElement("li");
    lapTime.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
    laps.appendChild(lapTime);
};

// Reset button functionality
reset.onclick = () => {
    clearInterval(timeInterval);
    hrs = 0;
    mins = 0;
    sec = 0;
    ms = 0;
    stopwatchDuration.innerHTML = "00:00:00:00";
    laps.innerHTML = "";

    start.style.display = "inline";
    stop.style.display = "none";
    lap.style.display = "none";
    reset.style.display = "none";
};
