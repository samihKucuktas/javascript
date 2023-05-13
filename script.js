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
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'X', 'X', 'O'],
];

//board With Pieces
let boardWP = [
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'X', 'X'],
    ['X', 'O', 'GN', 'X'],
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

RF = RED_FLOWER


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
        case 'X':
            oImg.setAttribute('src',
                './pieces/X.png');
            break;
        case 'O':
            oImg.setAttribute('src','./pieces/O.png');
            break;
        case 'G':
            oImg.setAttribute('src','./pieces/G.png');
            break;
        case 'GN':
            oImg.setAttribute('src','./pieces/GN.png');
            break;
    }

    //each image gets appropriate id using coordinates in 2d array
    oImg.setAttribute('id', id);

    document.getElementById('board').appendChild(oImg);
}

//current selection
let currentClicked;
let currentMove;



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



//initial loop of all the img of the board and adds click event listeners
for (let i = 0; i < boardWP.length; i++) {
    for (let j = 0; j < boardWP[i].length; j++) {
        document.querySelector('#B' + i + '-' + j).addEventListener('click', function () {
            console.log('clicked' + ' ' + i + '-' + j);
            currentClicked = i.toString() + j.toString();
            console.log('currentClicked: ' + currentClicked)
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

    switch (pieceCode) {
        case 'X':
            console.log("do nothing");
            break;
        case 'O':
            console.log("do nothing");
            break;
        case 'G':

            break;
        case 'GN':
            console.log('movement GN');
            moveGN();
            break;
    }
}


function moveGN() {
    let i = parseInt(currentClicked.charAt(0));
    let j = parseInt(currentClicked.charAt(1));

    switch (currentMove) {
        case 'right':
            //move GN right
            console.log('1');
            testWriteBoard();
            boardWP[i][j + 1] = boardWP[i][j];
            console.log('2');
            testWriteBoard();
            boardWP[i][j] = board[i][j];

            //find piece assosiated with GN and also move that(G)
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[i].length; y++) {
                    if (boardWP[x][y] === 'G') {
                        boardWP[x][y + 1] = boardWP[x][y];
                        boardWP[x][y] = board[x][y];
                        break;
                    }
                }
            }

            refreshBoardImg();
            break;
        case 'left':
            //move GN left
            boardWP[i][j - 1] = boardWP[i][j];
            boardWP[i][j] = board[i][j];

            //find piece assosiated with GN and also move that(G)
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[i].length; y++) {
                    if (boardWP[x][y] === 'G') {
                        boardWP[x][y - 1] = boardWP[x][y];
                        boardWP[x][y] = board[x][y];
                        break;
                    }
                }
            }
            refreshBoardImg();
            break;
        case 'up':
            //move GN up
            boardWP[i - 1][j] = boardWP[i][j];
            boardWP[i][j] = board[i][j];

            //find piece assosiated with GN and also move that(G)
            for (let x = 0; x < boardWP.length; x++) {
                for (let y = 0; y < boardWP[i].length; y++) {
                    if (boardWP[x][y] === 'G') {
                        boardWP[x - 1][y] = boardWP[x][y];
                        boardWP[x][y] = board[x][y];
                        break;
                    }
                }
            }
            refreshBoardImg();
            testWriteBoard();
            break;
        case 'down':
            console.log('guh');
            testWriteBoard();
            //find piece assosiated with GN and also move that(G)
            //gotta move bottom piece first otherwise it goes into itself
            for (let x = boardWP.length -1; x > 0; x--) {
                console.log('x: ' + x);
                for (let y = boardWP[i].length -1; y > 0 ; y--) {
                    console.log('y: ' + y);
                    console.log('boardWP[x][y]: ' + boardWP[x][y])
                    if (boardWP[x][y] === 'G') {
                        boardWP[x + 1][y] = boardWP[x][y];
                        boardWP[x][y] = board[x][y];
                        break;
                    }
                }
            }
            console.log('guh');
            testWriteBoard();
            //move GN down
            boardWP[i + 1][j] = boardWP[i][j];
            boardWP[i][j] = board[i][j];
            console.log('guh');
            testWriteBoard();

            refreshBoardImg();
            break;
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
                        './pieces/X.png'
                    );
                    break;
                case 'O':
                    element.setAttribute(
                        'src',
                        './pieces/O.png'
                    );
                    break;
                case 'G':
                    element.setAttribute(
                        'src',
                        './pieces/G.png'
                    );
                    break;
                case 'GN':
                    element.setAttribute(
                        'src',
                        './pieces/GN.png'
                    );
                    break;
            }

            //lookForInput(i, j);
        }
    }
}


function testWriteBoard() {
    for (let i = 0; i < boardWP.length; i++) {
        console.log(boardWP[i]);
    }
}

