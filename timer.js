let time = 0; //minutes * 60 seconds
let givealert = true;
setInterval(updateCountdown, 1000); //update every 1 second
let minutes = 0
let seconds = 0
function updateCountdown() {
    if (!checkWin()){
        minutes = Math.floor(time / 60);
        seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        const contdownEl = document.getElementById("countdown");
        contdownEl.innerHTML = `${minutes}:${seconds}`;
        console.log(time)
        time++;
    }else if (givealert){
        time--;
        if(time<60){
            givealert = false;
            alert("YOU WIN! \n all nuts have been deposited \n you took " + seconds + " seconds");
            givealert = false;
        }else{
            givealert = false;
            alert("YOU WIN! \n all nuts have been deposited \n you took " + minutes + " minute and " + seconds + " seconds");
        }
    }
}