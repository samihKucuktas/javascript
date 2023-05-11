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
var oImg = document.createElement("img");
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
    ['X', 'X', 'O', 'X'],
    ['O', 'RLN', 'RL', 'X'],
    ['X', 'RF', 'GN', 'X'],
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
    var oImg = document.createElement('img');

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
        case 'RF':
            oImg.setAttribute('src','./pieces/RF.png');
            break;
        case 'RLN':
            oImg.setAttribute('src','./pieces/RLN.png');
            break;
        case 'RL':
            oImg.setAttribute('src','./pieces/RL.png');
            break;
    }

    //each image gets appropriate id using coordinates in 2d array
    oImg.setAttribute('id', id);

    document.getElementById('board').appendChild(oImg);
}

//initial loop of all the img of the board and adds click and keypress event listeners
for (let i = 0; i < boardWP.length; i++) {
    for (let j = 0; j < boardWP[i].length; j++) {
        lookForInput(i, j);
    }
}

//refreshes board by removing all img elements and adding them back with the right src link
function refreshBoard() {
    for (let i = 0; i < boardWP.length; i++) {
        for (let j = 0; j < boardWP[i].length; j++) {
            //remove current img
            const element = document.querySelector('#B' + i + '-' + j);
            element.remove();

            //add updated current img
            addBoard('B' + i + '-' + j, boardWP[i][j]);

            lookForInput(i, j);
        }
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

//adds event listeners to current img (and also moves but that might be better in own function)
function lookForInput(i, j) {
    document
        .querySelector('#B' + i + '-' + j)
        .addEventListener('click', function () {
            console.log('clicked' + ' ' + i + '-' + j);

            if (boardWP[i][j] == 'GN') {
                //YOOO is this still needed? and if it is how do we make it modular/ make a function for it to add others more easily

                document.addEventListener('keydown', function (event) {
                    if (event.keyCode == 37) {
                        console.log('Left was pressed');
                        if (boardWP[i][j] == 'GN') {
                            //YOOO if so is this still needed

                            //move GN left
                            boardWP[i][j - 1] = boardWP[i][j];
                            boardWP[i][j] = board[i][j];

                            //find piece assosiated with GN and also move that(G)
                            for (let x = 0; x < boardWP.length; x++) {
                                for (let y = 0; y < boardWP[i].length; y++) {
                                    if (boardWP[x][y] == 'G') {
                                        boardWP[x][y - 1] = boardWP[x][y];
                                        boardWP[x][y] = board[x][y];
                                        break;
                                    }
                                }
                            }

                            //refreshBoard();
                            refreshBoardImg();
                        }
                    } else if (event.keyCode == 38) {
                        console.log('up was pressed');
                    } else if (event.keyCode == 39) {
                        console.log('Right was pressed');
                        if (boardWP[i][j] == 'GN') {
                            //YOOO if so is this still needed

                            //move GN right
                            boardWP[i][j + 1] = boardWP[i][j];
                            boardWP[i][j] = board[i][j];

                            //find piece assosiated with GN and also move that(G)
                            for (let x = 0; x < boardWP.length; x++) {
                                for (let y = 0; y < boardWP[i].length; y++) {
                                    if (boardWP[x][y] == 'G') {
                                        boardWP[x][y + 1] = boardWP[x][y];
                                        boardWP[x][y] = board[x][y];
                                        break;
                                    }
                                }
                            }

                            //refreshBoard();
                            refreshBoardImg();
                        }
                    } else if (event.keyCode == 40) {
                        console.log('down was pressed');
                    }
                });
            }
        });
}








