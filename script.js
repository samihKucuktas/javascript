/*
//EXAMPLE of 2d array and forloop to cycle all elements in 2d array
let items = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];


for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items[i].length; j++) {
    console.log(items[i][j]);
  }
}
*/

/*
//EXAMPLE of function
 function moveUp(p1) {
  return p1;
}
*/

/*
//EXAMPLE of creating a new img object in the HTML code
let oImg = document.createElement("img");
oImg.setAttribute('src', 'https://cdn.discordapp.com/attachments/458953775525396480/1101892765270421595/image.png');
oImg.setAttribute('height', '100px');
oImg.setAttribute('width', '100px');
document.body.appendChild(oImg);
*/

/*
//EXAMPLE of adding click event to an object in the HTML with a function
document.querySelector('#B0-0').addEventListener('click', function() {
  console.log("yoooooo")
})
*/


//board without any pieces
let board = [
    ['X', 'X', 'O', 'X'],
    ['O', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'X', 'X', 'O'],
];

//Temp With Pieces
let boardTemp = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
];

//board With Pieces
let boardWP = [
    ['X', 'X', 'O', 'X'],
    ['O', 'RN', 'R', 'X'],
    ['X', 'UF', 'GN', 'X'],
    ['X', 'X', 'G', 'O'],
];

//write array in console
for (let i = 0; i < boardWP.length; i++) {
    console.log(boardWP[i]);
}

//BOARD LEGEND
/*
X = BOARD
O = OPEN_HOLE
FO = FILLED_HOLE

UF = UNMOVABLE_FLOWER


R = RED
G = GRAY
Y = YELLOW
B = BLACK

XN = XXXX_NUT
XNN = XXXX_NO_NUT
XF = XXXX_FLOWER
*/

//render full board in html
for (let i = 0; i < boardWP.length; i++) {
    for (let j = 0; j < boardWP[i].length; j++) {
        addBoard('B' + i + '-' + j, boardWP[i][j]);
    }
}

//adds a img to HTML with link
function addBoard(id, pieceCode) {
    let oImg = document.createElement('img');


    switch (pieceCode) {
        //BOARD PIECES
        case 'X':
            oImg.setAttribute(
                'src',
                './pieces/BOARD/X.png'
            );
            break;
        case 'O':
            oImg.setAttribute(
                'src',
                './pieces/BOARD/O.png'
            );
            break;
        case 'FO':
            oImg.setAttribute(
                'src',
                './pieces/BOARD/FO.png'
            );
            break;
        case 'UF':
            oImg.setAttribute(
                'src',
                './pieces/BOARD/UF.png'
            );
            break;
            //NOT_SELECTED GREY SQUIRREL
        case 'G':
            oImg.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/GREY/G.PNG'
            );
            break;
        case 'GN':
            oImg.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/GREY/GN.PNG'
            );
            break;
        case 'GNN':
            oImg.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/GREY/GNN.PNG'
            );
            break;
        //SELECTED GREY SQUIRREL
        case 'GS':
            oImg.setAttribute(
                'src',
                './pieces/UP/SELECTED/GREY/GS.PNG'
            );
            break;
        case 'GNS':
            oImg.setAttribute(
                'src',
                './pieces/UP/SELECTED/GREY/GNS.PNG'
            );
            break;
        case 'GNNS':
            oImg.setAttribute(
                'src',
                './pieces/UP/SELECTED/GREY/GNNS.PNG'
            );
            break;
        //NOT_SELECTED RED SQUIRREL
        case 'R':
            oImg.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/RED/R.PNG'
            );
            oImg.style.transform = 'rotate(-90deg)';
            break;
        case 'RN':
            oImg.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/RED/RN.PNG'
            );
            oImg.style.transform = 'rotate(-90deg)';
            break;
        case 'RNN':
            oImg.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/RED/RNN.PNG'
            );
            oImg.style.transform = 'rotate(-90deg)';
            break;
        //SELECTED RED SQUIRREL
        case 'RS':
            oImg.setAttribute(
                'src',
                './pieces/UP/SELECTED/RED/RS.PNG'
            );
            oImg.style.transform = 'rotate(-90deg)';
            break;
        case 'RNS':
            oImg.setAttribute(
                'src',
                './pieces/UP/SELECTED/RED/RNS.PNG'
            );
            oImg.style.transform = 'rotate(-90deg)';
            break;
        case 'RNNS':
            oImg.setAttribute(
                'src',
                './pieces/UP/SELECTED/RED/RNNS.PNG'
            );
            oImg.style.transform = 'rotate(-90deg)';
            break;
    }


    //each image gets appropriate id using coordinates in 2d array
    oImg.setAttribute('id', id);

    document.getElementById('board').appendChild(oImg);
}

//current selection
let currentClicked;
//current move
let currentMove;


//event listeners for on-screen arrows
document.getElementById('arrRightid').addEventListener('click', function () {
    console.log('right arrow');
    currentMove = 'right';
    Movement();
});
document.getElementById('arrUpid').addEventListener('click', function () {
    console.log('up arrow');
    currentMove = 'up';
    Movement();
});
document.getElementById('arrLeftid').addEventListener('click', function () {
    console.log('left arrow');
    currentMove = 'left';
    Movement();
});
document.getElementById('arrDownid').addEventListener('click', function () {
    console.log('down arrow');
    currentMove = 'down';
    Movement();
});


//event listeners for keyboard arrows
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        console.log('left key');
        currentMove = 'left';
        Movement();
    } else if (event.keyCode === 38) {
        console.log('up key');
        currentMove = 'up';
        Movement();
    } else if (event.keyCode === 39) {
        console.log('right key');
        currentMove = 'right';
        Movement();
    } else if (event.keyCode === 40) {
        console.log('down arrow');
        currentMove = 'down';
        Movement();
    }
});


//adds event listener for which piece has been clicked/selected
for (let i = 0; i < boardWP.length; i++) {
    for (let j = 0; j < boardWP[i].length; j++) {
        document.querySelector('#B' + i + '-' + j).addEventListener('click', function () {

            console.log('clicked' + ' ' + i + '-' + j);
            currentClicked = i.toString() + j.toString();
            console.log('currentClicked: ' + currentClicked)


            //Remove previous selection
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[x].length; y++) {

                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S') {
                        boardWP[x][y] = boardWP[x][y].slice(0, -1);
                    }
                }
            }

            //add S ro end of selected piece if piece is a movable piece
            let firstletter = boardWP[i][j].charAt(0);

            if (boardWP[i][j] !== 'X' && boardWP[i][j] !== 'O' && boardWP[i][j] !== 'FO' && boardWP[i][j] !== 'UF') {

                for (let x = 0; x < boardWP.length; x++) {
                    for (let y = 0; y < boardWP[x].length; y++) {

                        if (boardWP[x][y].charAt(0) === firstletter) {
                            boardWP[x][y] += "S"
                        }
                    }
                }

            }
            testWriteBoard();
            refreshBoardImg();


        });
    }
}


function Movement() {
    let i = currentClicked.charAt(0);
    let j = currentClicked.charAt(1);

    let pieceCode = boardWP[i][j];
    console.log('currentClicked.charAt(0): ' + currentClicked.charAt(0));
    console.log('currentClicked.charAt(1): ' + currentClicked.charAt(1));
    console.log('pieceCode: ' + pieceCode);

    let crashCounter = 0;
    //boardTemp = boardWP
    for (let x = 0; x < boardWP.length; x++) {
        for (let y = 0; y < boardWP[x].length; y++) {
            boardTemp[x][y] = boardWP[x][y];
        }
    }


    switch (currentMove) {
        case 'right':
            for (let x = boardWP.length - 1; x >= 0; x--) {
                for (let y = boardWP[i].length - 1; y >= 0; y--) {
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S' && y + 1 < 4) {

                        //if the piece we're moving to is not a boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x][y + 1] !== 'X' && boardWP[x][y + 1] !== 'O' && boardWP[x][y + 1] !== 'FO'){
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        }else {
                            //if current piece has only one N(has nut) and the piece its moving to is an O(open hole)
                            // then make O(open hole) into FO(filled hole) and make N(has nut) into NN(no nut)
                            let nrOfNs = boardWP[x][y].length - boardWP[x][y].replaceAll('N', '').length;
                            if (nrOfNs === 1 && boardWP[x][y + 1] === 'O') {
                                board[x][y + 1] = 'FO'
                                boardWP[x][y] = boardWP[x][y].charAt(0) + 'NNS'
                            }

                            //move piece and patch previous position
                            boardWP[x][y + 1] = boardWP[x][y];
                            boardWP[x][y] = board[x][y];
                        }


                    }
                }
            }

            //boardWP = boardTemp, set board back to previous state if there is ever a crash
            if (crashCounter > 0){
                for (let x = 0; x < boardWP.length; x++) {
                    for (let y = 0; y < boardWP[x].length; y++) {
                        boardWP[x][y] = boardTemp[x][y];
                    }
                }
            }

            refreshBoardImg();
            break;
        case 'left':
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[i].length; y++) {
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S' && y - 1 > -1) {

                        //if the piece we're moving to is not a boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x][y - 1] !== 'X' && boardWP[x][y - 1] !== 'O' && boardWP[x][y - 1] !== 'FO'){
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        }else {
                            //if current piece has only one N(has nut) and the piece its moving to is an O(open hole)
                            // then make O(open hole) into FO(filled hole) and make N(has nut) into NN(no nut)
                            let nrOfNs = boardWP[x][y].length - boardWP[x][y].replaceAll('N', '').length;
                            if (nrOfNs === 1 && boardWP[x][y - 1] === 'O') {
                                board[x][y - 1] = 'FO'
                                boardWP[x][y] = boardWP[x][y].charAt(0) + 'NNS'
                            }

                            //move piece and patch previous position
                            boardWP[x][y - 1] = boardWP[x][y];
                            boardWP[x][y] = board[x][y];
                        }


                    }
                }
            }

            //boardWP = boardTemp, set board back to previous state if there is ever a crash
            if (crashCounter > 0){
                for (let x = 0; x < boardWP.length; x++) {
                    for (let y = 0; y < boardWP[x].length; y++) {
                        boardWP[x][y] = boardTemp[x][y];
                    }
                }
            }

            refreshBoardImg();
            break;
        case 'up':
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[i].length; y++) {
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S') {

                        //if the piece we're moving to is not a boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x - 1][y] !== 'X' && boardWP[x - 1][y] !== 'O' && boardWP[x - 1][y] !== 'FO'){
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        }else {
                            //if current piece has only one N(has nut) and the piece its moving to is an O(open hole)
                            // then make O(open hole) into FO(filled hole) and make N(has nut) into NN(no nut)
                            let nrOfNs = boardWP[x][y].length - boardWP[x][y].replaceAll('N', '').length;
                            if (nrOfNs === 1 && boardWP[x - 1][y] === 'O') {
                                board[x - 1][y] = 'FO'
                                boardWP[x][y] = boardWP[x][y].charAt(0) + 'NNS'
                            }

                            //move piece and patch previous position
                            boardWP[x - 1][y] = boardWP[x][y];
                            boardWP[x][y] = board[x][y];
                        }


                    }
                }
            }

            //boardWP = boardTemp, set board back to previous state if there is ever a crash
            if (crashCounter > 0){
                for (let x = 0; x < boardWP.length; x++) {
                    for (let y = 0; y < boardWP[x].length; y++) {
                        boardWP[x][y] = boardTemp[x][y];
                    }
                }
            }

            refreshBoardImg();
            break;
        case 'down':
            for (let x = boardWP.length - 1; x >= 0; x--) {
                for (let y = boardWP[i].length - 1; y >= 0; y--) {
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S') {

                        //if the piece we're moving to is not a boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x + 1][y] !== 'X' && boardWP[x + 1][y] !== 'O' && boardWP[x + 1][y] !== 'FO'){
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        }else {
                            //if current piece has only one N(has nut) and the piece its moving to is an O(open hole)
                            // then make O(open hole) into FO(filled hole) and make N(has nut) into NN(no nut)
                            let nrOfNs = boardWP[x][y].length - boardWP[x][y].replaceAll('N', '').length;
                            if (nrOfNs === 1 && boardWP[x + 1][y] === 'O') {
                                board[x + 1][y] = 'FO'
                                boardWP[x][y] = boardWP[x][y].charAt(0) + 'NNS'
                            }

                            //move piece and patch previous position
                            boardWP[x + 1][y] = boardWP[x][y];
                            boardWP[x][y] = board[x][y];
                        }


                    }
                }
            }

            //boardWP = boardTemp, set board back to previous state if there is ever a crash
            if (crashCounter > 0){
                for (let x = 0; x < boardWP.length; x++) {
                    for (let y = 0; y < boardWP[x].length; y++) {
                        boardWP[x][y] = boardTemp[x][y];
                    }
                }
            }

            refreshBoardImg();
            break;
    }
    checkWin();

}

function checkWin() {
    let totalNs = 0;

    for (let i = 0; i < boardWP.length; i++) {
        for (let j = 0; j < boardWP[i].length; j++) {
            let nrOfNs = boardWP[i][j].length - boardWP[i][j].replaceAll('N', '').length;
            if (nrOfNs === 1){
                totalNs++;
            }

        }
    }

    if (totalNs === 0){
        alert("YOU WIN! \n all nuts have been deposited");
    }

}

//refreshes the board by keeping the img elements and only changing the src link
function refreshBoardImg() {
    for (let i = 0; i < boardWP.length; i++) {
        for (let j = 0; j < boardWP[i].length; j++) {
            const element = document.querySelector('#B' + i + '-' + j);
            let pieceCode = boardWP[i][j];

            switch (pieceCode) {
                case 'X':
                    element.setAttribute(
                        'src',
                        './pieces/BOARD/X.png'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'O':
                    element.setAttribute(
                        'src',
                        './pieces/BOARD/O.png'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'FO':
                    element.setAttribute(
                        'src',
                        './pieces/BOARD/FO.png'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'G':
                    element.setAttribute(
                        'src',
                        './pieces/UP/NOT_SELECTED/GREY/G.PNG'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'GN':
                    element.setAttribute(
                        'src',
                        './pieces/UP/NOT_SELECTED/GREY/GN.PNG'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'GNN':
                    element.setAttribute(
                        'src',
                        './pieces/UP/NOT_SELECTED/GREY/GNN.PNG'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'GS':
                    element.setAttribute(
                        'src',
                        './pieces/UP/SELECTED/GREY/GS.PNG'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'GNS':
                    element.setAttribute(
                        'src',
                        './pieces/UP/SELECTED/GREY/GNS.PNG'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                case 'GNNS':
                    element.setAttribute(
                        'src',
                        './pieces/UP/SELECTED/GREY/GNNS.PNG'
                    );
                    element.style.transform = 'rotate(0deg)';
                    break;
                //NOT_SELECTED RED SQUIRREL
                case 'R':
                    element.setAttribute(
                        'src',
                        './pieces/UP/NOT_SELECTED/RED/R.PNG'
                    );
                    element.style.transform = 'rotate(-90deg)';
                    break;
                case 'RN':
                    element.setAttribute(
                        'src',
                        './pieces/UP/NOT_SELECTED/RED/RN.PNG'
                    );
                    element.style.transform = 'rotate(-90deg)';
                    break;
                case 'RNN':
                    element.setAttribute(
                        'src',
                        './pieces/UP/NOT_SELECTED/RED/RNN.PNG'
                    );
                    element.style.transform = 'rotate(-90deg)';
                    break;
                //SELECTED RED SQUIRREL
                case 'RS':
                    element.setAttribute(
                        'src',
                        './pieces/UP/SELECTED/RED/RS.PNG'
                    );
                    element.style.transform = 'rotate(-90deg)';
                    break;
                case 'RNS':
                    element.setAttribute(
                        'src',
                        './pieces/UP/SELECTED/RED/RNS.PNG'
                    );
                    element.style.transform = 'rotate(-90deg)';
                    break;
                case 'RNNS':
                    element.setAttribute(
                        'src',
                        './pieces/UP/SELECTED/RED/RNNS.PNG'
                    );
                    element.style.transform = 'rotate(-90deg)';
                    break;
            }


        }
    }
}


function testWriteBoard() {
    for (let i = 0; i < boardWP.length; i++) {
        console.log(boardWP[i]);
    }
}

