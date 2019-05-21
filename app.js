let user_score = 0;
let computer_score = 0;

  function updatePlayerScore() {
    user_score += 1;
      document.getElementById('user-score').innerHTML = user_score;
      document.getElementById('result').innerHTML = 'You win the round';
  }

  function updateComputerScore() {
    computer_score += 1;
      document.getElementById('computer-score').innerHTML = computer_score;
      document.getElementById('result').innerHTML = 'The computer wins the round';
  }

  function getResult(user_move) {
      let computer_move = computerMove();
      compareMoves(user_move, computer_move);
      gameOverCheck();
}

  function userMove() {
  document.getElementById('rock').addEventListener('click', function() {
    getResult('Rock');
  });

  document.getElementById('paper').addEventListener('click', function() {
    getResult('Paper');
  });
  document.getElementById('scissors').addEventListener('click', function() {
    getResult('Scissors');
  });
}

function computerMove() {
let move = ['Rock', 'Paper', 'Scissors'];
var randMove = move[Math.floor(Math.random() * move.length)];
return randMove;
}

function compareMoves(user_move, computer_move) {
  document.getElementById('move').innerHTML = `User: ${user_move} Computer: ${computer_move}`;

  if(user_move === computer_move) {
    document.getElementById('result').innerHTML = 'That round was a draw!';
  }
  else if(user_move === 'Paper' && computer_move ==='Rock' ) {
    updatePlayerScore();
  }
  else if(user_move === 'Rock' && computer_move ==='Scissors' ) {
    updatePlayerScore();
  }
  else if(user_move === 'Scissors' && computer_move ==='Paper' ) {
    updatePlayerScore();
  }
  else updateComputerScore();
}

function gameOverCheck() {
  if(user_score === 10) {
    document.getElementById('result').innerHTML = `You won the game ${user_score} : ${computer_score}`;
    resetScores();
  }
  if(computer_score === 10) {
    document.getElementById('result').innerHTML = `You lost the game ${user_score} : ${computer_score}`;
    resetScores();
  }
}

function resetScores() {
user_score = 0;
computer_score = 0;
document.getElementById('move').innerHTML = 'Scores have been reset - make a move to start another game'
document.getElementById('user-score').innerHTML = 0;
document.getElementById('computer-score').innerHTML = 0;
}

userMove();
