let time = 2 * 60; //minutes * 60 seconds
let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

function updateCountdown() {

    const minutes = Math.floor(time / 60); 
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; 
    const contdownEl = document.getElementById("countdown"); 
    contdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;

    if (time < 0) { // stop the setInterval whe time = 0 for avoid negative time
        clearInterval(refreshIntervalId);
        alert("TIME IS UP!!")
    }
}