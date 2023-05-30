let time = 0; //minutes * 60 seconds
let givealert = true;
let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

function updateCountdown() {
    if (checkWin() !== true){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        const contdownEl = document.getElementById("countdown");
        contdownEl.innerHTML = `${minutes}:${seconds}`;

        time++;
    }else if (givealert === true){
        time--;
        alert("YOU WIN! \n all nuts have been deposited \n you took " + time + " seconds");
        givealert = false;
    }
}