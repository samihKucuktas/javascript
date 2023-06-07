

//CHANGE LEVEL (boardWP and rotationValues) ACCORDING TO LEVEL BUTTON THAT HAS BEEN CLICKED
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let boardWP;
let rotationValues;

//STARTER
//LEVEL1
document.querySelector('.starter li:nth-child(1)').addEventListener("click", (event) => {



    boardWP = [
        ['X', 'X', 'O', 'X'],
        ['O', 'RN', 'R', 'X'],
        ['X', 'UF', 'GN', 'X'],
        ['X', 'X', 'G', 'O'],
    ];

    rotationValues = [
        [0, 0, 0, 0],
        [0, -90, -90, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL2
document.querySelector('.starter li:nth-child(2)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'GN', 'O', 'X'],
        ['UF', 'G', 'YF', 'X'],
        ['X', 'O', 'YN', 'Y'],
        ['X', 'X', 'X', 'O'],
    ];

    rotationValues = [
        [0, 0, 0, 0],
        [0, 0, -90, 0],
        [0, 0, -90, -90],
        [0, 0, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL3 
document.querySelector('.starter li:nth-child(3)').addEventListener("click", (event) => {

    boardWP = [
        ['B', 'BN', 'UF', 'X'],
        ['BF', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
        ['RN', 'R', 'X', 'O'],
    ];

    rotationValues = [
        [90, 90, 0, 0],
        [90, 0, 0, 0],
        [0, 0, 0, 0],
        [-90, -90, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//JUNIOR
//LEVEL1
document.querySelector('.junior li:nth-child(1)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'X', 'UF', 'X'],
        ['O', 'X', 'X', 'X'],
        ['X', 'Y', 'GN', 'X'],
        ['YF', 'YN', 'G', 'O'],
    ];

    rotationValues = [
        [0, 0, 0, 0],
        [00, 0, 0, 0],
        [0, -180, 0, 0],
        [-180, -180, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL2
document.querySelector('.junior li:nth-child(2)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'X', 'R', 'RN'],
        ['O', 'X', 'Y', 'YN'],
        ['X', 'B', 'BN', 'YF'],
        ['X', 'BF', 'X', 'O'],
    ];

    rotationValues = [
        [0, 0, 90, 90],
        [00, 0, 90, 90],
        [0, 90, 90, 90],
        [0, 90, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL3
document.querySelector('.junior li:nth-child(3)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'X', 'O', 'X'],
        ['O', 'X', 'X', 'X'],
        ['R', 'UF', 'BF', 'X'],
        ['RN', 'BN', 'B', 'O'],
    ];

    rotationValues = [
        [0, 0, 0, 0],
        [00, 0, 90, 0],
        [180, 0, -90, 0],
        [180, -90, -90, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//EXPERT
//LEVEL1
document.querySelector('.expert li:nth-child(1)').addEventListener("click", (event) => {

    boardWP = [
        ['GN', 'X', 'BF', 'B'],
        ['G', 'RN', 'R', 'BN'],
        ['X', 'O', 'YN', 'YF'],
        ['X', 'X', 'Y', 'O'],
    ];

    rotationValues = [
        [0, 0, 180, 180],
        [0, -90, -90, 180],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL2
document.querySelector('.expert li:nth-child(2)').addEventListener("click", (event) => {

    boardWP = [
        ['G', 'GN', 'O', 'X'],
        ['O', 'BF', 'RN', 'R'],
        ['BN', 'B', 'YF', 'X'],
        ['X', 'X', 'YN', 'Y'],
    ];

    rotationValues = [
        [90, 90, 0, 0],
        [0, -90, -90, -90],
        [-90, -90, -90, 0],
        [0, 0, -90, -90],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL3
document.querySelector('.expert li:nth-child(3)').addEventListener("click", (event) => {

    boardWP = [
        ['GN', 'R', 'YF', 'X'],
        ['G', 'RN', 'YN', 'Y'],
        ['X', 'O', 'X', 'BF'],
        ['X', 'X', 'BN', 'B'],
    ];

    rotationValues = [
        [0, 180, -90, 0],
        [0, 180, -90, -90],
        [0, 0, 0, -90],
        [0, 0, -90, -90],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//MASTER
//LEVEL1
document.querySelector('.master li:nth-child(1)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'GN', 'O', 'Y'],
        ['O', 'G', 'YF', 'YN'],
        ['X', 'BF', 'R', 'X'],
        ['BN', 'B', 'RN', 'O'],
    ];

    rotationValues = [
        [0, 0, 0, 180],
        [0, 0, 180, 180],
        [0, -90, 180, 0],
        [-90, -90, 180, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL2
document.querySelector('.master li:nth-child(2)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'BN', 'G', 'GN'],
        ['R', 'B', 'BF', 'X'],
        ['RN', 'Y', 'YN', 'X'],
        ['X', 'X', 'YF', 'O'],
    ];

    rotationValues = [
        [0, 0, 90, 90],
        [180, 0, 0, 0],
        [180, 90, 90, 0],
        [0, 0, 90, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL3
document.querySelector('.master li:nth-child(3)').addEventListener("click", (event) => {

    boardWP = [
        ['YN', 'YF', 'B', 'BN'],
        ['Y', 'X', 'BF', 'GN'],
        ['X', 'R', 'RN', 'G'],
        ['X', 'X', 'X', 'O'],
    ];

    rotationValues = [
        [0, 0, 90, 90],
        [0, 0, 90, 0],
        [0, 90, 90, 0],
        [0, 0, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//WIZARD
//LEVEL1
document.querySelector('.wizard li:nth-child(1)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'X', 'O', 'GN'],
        ['O', 'R', 'RN', 'G'],
        ['YN', 'YF', 'B', 'BN'],
        ['Y', 'X', 'BF', 'O'],
    ];

    rotationValues = [
        [0, 0, 0, 0],
        [0, 90, 90, 0],
        [0, 0, 90, 90],
        [0, 0, 90, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL2
document.querySelector('.wizard li:nth-child(2)').addEventListener("click", (event) => {

    boardWP = [
        ['G', 'GN', 'BF', 'R'],
        ['O', 'BN', 'B', 'RN'],
        ['X', 'O', 'YN', 'YF'],
        ['X', 'X', 'Y', 'O'],
    ];

    rotationValues = [
        [90, 90, -90, 180],
        [0, -90, -90, 180],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});

//LEVEL3
document.querySelector('.wizard li:nth-child(3)').addEventListener("click", (event) => {

    boardWP = [
        ['X', 'BN', 'O', 'X'],
        ['O', 'B', 'BF', 'R'],
        ['GN', 'G', 'YF', 'RN'],
        ['X', 'X', 'YN', 'Y'],
    ];

    rotationValues = [
        [0, 0, 0, 0],
        [0, 0, 0, 180],
        [-90, -90, -90, 180],
        [0, 0, -90, -90],
    ];

    time = 0;
    revertBoardToDefault();
    refreshBoardImg();
});


//INITIALIZE BOARD ARRAYS NEEDED FOR THE GAME TO FUNCTION( default values, level values, temporary storage arrays )
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//board without any pieces
let board = [
    ['X', 'X', 'O', 'X'],
    ['O', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'X', 'X', 'O'],
];


//board With Pieces (gets replaced)
boardWP = [
    ['X', 'X', 'O', 'X'],
    ['O', 'RN', 'R', 'X'],
    ['X', 'UF', 'GN', 'X'],
    ['X', 'X', 'G', 'O'],
];


//rotation values for the pieces
let rotationValuesDefault = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

//rotation values for the pieces (gets replaced)
rotationValues = [
    [0, 0, 0, 0],
    [0, -90, -90, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

//Temp Without Pieces(gets filled later)
let boardTemp = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
];

//Temp With Pieces(gets filled later)
let boardWPTemp = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
];

//Temp rotation values for the pieces (gets filled later)
let rotationValuesTemp = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
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

X = BUTT_PIECE
XN = XXXX_NUT
XNN = XXXX_NO_NUT
XF = XXXX_FLOWER
XXXS = SELECTED_PIECE
*/





//RENDER FULL BOARD IN HTML, CREATES ALL THE IMAGE ELEMENTS AND FILLS THEM WITH THE RIGHT SRC IMAGE ACCORDING TO boardWP
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//render full board in html
for (let i = 0; i < boardWP.length; i++) {
    for (let j = 0; j < boardWP[i].length; j++) {
        addBoard('B' + i + '-' + j, i, j);
    }
}

//adds a img to src HTML with link
function addBoard(id, i, j) {
    let Img = document.createElement('img');


    loadimage(Img, i, j);


    //each image gets appropriate id using coordinates in 2d array
    Img.setAttribute('id', id);

    document.getElementById('board').appendChild(Img);
}





//INITIALIZE THE EVENT LISTENERS FOR THE ARROW KEYS AND ON SCREEN ARROWS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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





//INITIALIZE THE EVENT LISTENERS AND CODE TO SHOW THE SELECTED PIECE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//adds event listener for which piece has been clicked/selected and add selected tag to end of pieceCode
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

            //add S to end of selected piece if piece is a movable piece
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
            // testWriteBoard();
            refreshBoardImg();

        });
    }
}





//CHECK WHICH ARROW HAS BEEN PRESSED AND APPLY MOVEMENT TO THE SELECTED PIECE, IF THE MOVEMENT ISNT POSSIBLE IT REVERTS TO PREVIOUS STATE
//ALSO CHECK IF PLAYER HAS WON
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Movement() {
    let i = currentClicked.charAt(0);
    let j = currentClicked.charAt(1);

    let pieceCode = boardWP[i][j];
    console.log('currentClicked.charAt(0): ' + currentClicked.charAt(0));
    console.log('currentClicked.charAt(1): ' + currentClicked.charAt(1));
    console.log('pieceCode: ' + pieceCode);

    let crashCounter = 0;
    //boardWPTemp = boardWP
    for (let x = 0; x < boardWP.length; x++) {
        for (let y = 0; y < boardWP[x].length; y++) {
            boardWPTemp[x][y] = boardWP[x][y];
        }
    }
    //boardTemp = board
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            boardTemp[x][y] = board[x][y];
        }
    }
    //rotationValuesTemp = rotationValues
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            rotationValuesTemp[x][y] = rotationValues[x][y];
        }
    }


    switch (currentMove) {
        case 'right':
            for (let x = boardWP.length - 1; x >= 0; x--) {
                for (let y = boardWP[i].length - 1; y >= 0; y--) {
                    //if the last letter is an S(selected) and the piece its moving to is not out of bounds
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S' && y + 1 < 4) {

                        //if the piece we're moving to is not a free boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x][y + 1] !== 'X' && boardWP[x][y + 1] !== 'O' && boardWP[x][y + 1] !== 'FO') {
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        } else {
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

                            rotationValues[x][y + 1] = rotationValues[x][y];
                            rotationValues[x][y] = rotationValuesDefault[x][y];
                        }


                    }
                }
            }

            //set board back to previous state if there is ever a crash
            if (crashCounter > 0) {
                revertBoards();
            }

            refreshBoardImg();
            break;
        case 'left':
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[i].length; y++) {
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S' && y - 1 > -1) {

                        //if the piece we're moving to is not a boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x][y - 1] !== 'X' && boardWP[x][y - 1] !== 'O' && boardWP[x][y - 1] !== 'FO') {
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        } else {
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

                            rotationValues[x][y - 1] = rotationValues[x][y];
                            rotationValues[x][y] = rotationValuesDefault[x][y];
                        }


                    }
                }
            }

            //boardWP = boardWPTemp, set board back to previous state if there is ever a crash
            if (crashCounter > 0) {
                revertBoards();
            }

            refreshBoardImg();
            break;
        case 'up':
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[i].length; y++) {
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S') {

                        //if the piece we're moving to is not a boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x - 1][y] !== 'X' && boardWP[x - 1][y] !== 'O' && boardWP[x - 1][y] !== 'FO') {
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        } else {
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

                            rotationValues[x - 1][y] = rotationValues[x][y];
                            rotationValues[x][y] = rotationValuesDefault[x][y];
                        }


                    }
                }
            }

            //boardWP = boardWPTemp, set board back to previous state if there is ever a crash
            if (crashCounter > 0) {
                revertBoards();
            }

            refreshBoardImg();
            break;
        case 'down':
            for (let x = boardWP.length - 1; x >= 0; x--) {
                for (let y = boardWP[i].length - 1; y >= 0; y--) {
                    if (boardWP[x][y].charAt(boardWP[x][y].length - 1) === 'S') {

                        //if the piece we're moving to is not a boardpiece add to crashcounter and at the end reset board to previous state
                        if (boardWP[x + 1][y] !== 'X' && boardWP[x + 1][y] !== 'O' && boardWP[x + 1][y] !== 'FO') {
                            crashCounter++;
                            console.log('crashCounter: ' + crashCounter);
                        } else {
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

                            rotationValues[x + 1][y] = rotationValues[x][y];
                            rotationValues[x][y] = rotationValuesDefault[x][y];
                        }


                    }
                }
            }

            //boardWP = boardWPTemp, set board back to previous state if there is ever a crash
            if (crashCounter > 0) {
                revertBoards();
            }

            refreshBoardImg();
            break;
    }
    checkWin();

}

//helper function to check if player has won
function checkWin() {
    let totalNs = 0;

    for (let i = 0; i < boardWP.length; i++) {
        for (let j = 0; j < boardWP[i].length; j++) {
            let nrOfNs = boardWP[i][j].length - boardWP[i][j].replaceAll('N', '').length;
            if (nrOfNs === 1) {
                totalNs++;
            }

        }
    }

    if (totalNs === 0) {
        return true
        // alert("YOU WIN! \n all nuts have been deposited");
    }

}

//helper function to revert boards to previous state
function revertBoards() {

    //boardWP = boardWPTemp
    //board = boardTemp
    //rotationValues = rotationValuesTemp
    for (let x = 0; x < boardWP.length; x++) {
        for (let y = 0; y < boardWP[x].length; y++) {
            boardWP[x][y] = boardWPTemp[x][y];
            board[x][y] = boardTemp[x][y];
            rotationValues[x][y] = rotationValuesTemp[x][y];
        }
    }

}

//helper function to remove filled holes from the default board
function revertBoardToDefault(){
    board = [
        ['X', 'X', 'O', 'X'],
        ['O', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
        ['X', 'X', 'X', 'O'],
    ];
}


//helper function that refreshes the board by keeping the img elements and only changing the src link
function refreshBoardImg() {
    for (let i = 0; i < boardWP.length; i++) {
        for (let j = 0; j < boardWP[i].length; j++) {
            const element = document.querySelector('#B' + i + '-' + j);
            // let pieceCode = boardWP[i][j];

            loadimage(element, i, j);


        }
    }
}


//LOADS THE CORRECT IMAGES BASED ON THE BOARD ARRAYS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function loadimage(element, i, j) {
    element.style.transform = 'rotate(' + rotationValues[i][j] + 'deg)';
    let pieceCode = boardWP[i][j];

    switch (pieceCode) {
        //BOARD PIECES
        case 'X':
            element.setAttribute(
                'src',
                './pieces/BOARD/X.png'
            );
            element.setAttribute('alt', 'default board piece');
            break;
        case 'O':
            element.setAttribute(
                'src',
                './pieces/BOARD/O.png'
            );
            element.setAttribute('alt', 'hole piece');
            break;
        case 'FO':
            element.setAttribute(
                'src',
                './pieces/BOARD/FO.png'
            );
            element.setAttribute('alt', 'filled hole piece');
            break;
        case 'UF':
            element.setAttribute(
                'src',
                './pieces/BOARD/UF.png'
            );
            element.setAttribute('alt', 'unmoveable flower piece');
            break;
        //NOT_SELECTED GREY SQUIRREL
        case 'G':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/GREY/G.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'GN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/GREY/GN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'GNN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/GREY/GNN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        //SELECTED GREY SQUIRREL
        case 'GS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/GREY/GS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'GNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/GREY/GNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'GNNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/GREY/GNNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        //NOT_SELECTED RED SQUIRREL
        case 'R':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/RED/R.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'RN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/RED/RN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'RNN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/RED/RNN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        //SELECTED RED SQUIRREL
        case 'RS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/RED/RS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'RNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/RED/RNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'RNNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/RED/RNNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        //NOT_SELECTED YELLOW SQUIRREL
        case 'Y':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/YELLOW/Y.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'YF':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/YELLOW/YF.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'YN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/YELLOW/YN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'YNN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/YELLOW/YNN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        //SELECTED YELLOW SQUIRREL
        case 'YS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/YELLOW/YS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'YFS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/YELLOW/YFS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'YNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/YELLOW/YNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'YNNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/YELLOW/YNNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        //NOT_SELECTED BLACK SQUIRREL
        case 'B':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/BLACK/B.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'BF':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/BLACK/BF.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'BN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/BLACK/BN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'BNN':
            element.setAttribute(
                'src',
                './pieces/UP/NOT_SELECTED/BLACK/BNN.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        //SELECTED BLACK SQUIRREL
        case 'BS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/BLACK/BS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'BFS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/BLACK/BFS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'BNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/BLACK/BNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
        case 'BNNS':
            element.setAttribute(
                'src',
                './pieces/UP/SELECTED/BLACK/BNNS.PNG'
            );
            element.setAttribute('alt', 'squirrel piece');
            break;
    }
}





// function testWriteBoard() {
//     for (let i = 0; i < boardWP.length; i++) {
//         console.log(boardWP[i]);
//     }
// }
