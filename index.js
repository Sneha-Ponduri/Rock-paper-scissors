let player1Move = null;
let player2Move = null;
let currentPlayer = 1;

function makeMove(choice) {
    if (currentPlayer === 1) {
        player1Move = choice;
        document.getElementById('currentPlayer').textContent = '2';
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        player2Move = choice;
        document.getElementById('currentPlayer').textContent = '1';
        determineWinner();
        currentPlayer = 1;
    }
}

function determineWinner() {
    const result = document.getElementById('result');

    if (player1Move === player2Move) {
        result.textContent = `It's a tie! You both chose ${player1Move}.`;
    } else if (
        (player1Move === 'rock' && player2Move === 'scissors') ||
        (player1Move === 'paper' && player2Move === 'rock') ||
        (player1Move === 'scissors' && player2Move === 'paper')
    ) {
        result.textContent = `Player 1 wins! ${player1Move} beats ${player2Move}.`;
    } else {
        result.textContent = `Player 2 wins! ${player2Move} beats ${player1Move}.`;
    }

    document.getElementById('restart-btn').classList.remove('hidden');
}

function restartGame() {
    player1Move = null;
    player2Move = null;
    document.getElementById('result').textContent = '';
    document.getElementById('restart-btn').classList.add('hidden');
}
