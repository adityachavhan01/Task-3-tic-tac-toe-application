let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function cellClicked(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('tic-tac-toe-board').children[row].children[col].innerText = currentPlayer;
        if (checkWinner()) {
            showOutcome(currentPlayer + ' wins!');
            resetBoard();
        } else if (checkDraw()) {
            showOutcome('It\'s a draw!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}

function showOutcome(message) {
    let outcomeDialog = document.createElement('div');
    outcomeDialog.className = 'outcome-dialog';
    outcomeDialog.innerText = message;
    document.getElementById('tic-tac-toe-board').appendChild(outcomeDialog);
    
    setTimeout(function() {
        outcomeDialog.remove();
    }, 2000); // Remove the dialogue after 2 seconds
}
