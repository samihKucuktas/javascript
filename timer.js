let time = 0; //minutes * 60 seconds
let givealert = true;

let minutes = 0
let seconds = 0

let updateCountdown = function() {
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

            document.getElementById('WinDialog').showModal();
            document.querySelector('#WinDialog p').innerHTML = "YOU WIN! \n all nuts have been deposited, \n you took " + seconds + " seconds"

        }else{

            givealert = false;

            document.getElementById('WinDialog').showModal();
            document.querySelector('#WinDialog p').innerHTML = "YOU WIN! \n all nuts have been deposited, \n you took " + minutes + " minute and " + seconds + " seconds"

        }
    }
}

setInterval(updateCountdown, 1000); //update every 1 second








//*********HOW TO PLAY BUTTON AND TUTORIAL DIALOGUE BOX CLOSE*********//
document.querySelector('.tutorial_button').addEventListener('click', function () {

    document.getElementById('tutorialDialog').showModal();

});

document.querySelector('#tutorialDialog button').addEventListener('click', function () {

    document.getElementById('tutorialDialog').close()

});

//*********WIN DIALOGUE BOX CLOSE*********//
document.querySelector('#WinDialog button').addEventListener('click', function () {

    document.getElementById('WinDialog').close()

});
