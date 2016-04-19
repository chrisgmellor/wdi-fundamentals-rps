////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.");
  return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return "rock";
    }
    else if (randomNumber < 0.66) {
      return "paper";
    }
    else {
      return "scissors";
    }
  }

  ////////////////////////////////////////////////
  /*           Write Your Code Below            */
  ////////////////////////////////////////////////
  //Unit 3//

function getPlayerMove(move) {
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
  }
  //unit 4

function getWinner(playerMove, computerMove) {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    // Start of if/else
    //computer winning options
    if (computerMove === "rock" && playerMove === "scissors") {
      winner = 'computer';
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
      console.log("Computer wins!");
    }
    else if (computerMove === "paper" && playerMove === "rock") {
      winner = 'computer';
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
      console.log("Computer wins!");
    }
    else if (computerMove === "scissors" && playerMove === "paper") {
      winner = 'computer';
      console.log('Player chose ' + playerMove + ' while Computer chose' + computerMove + '.');
      console.log("Computer wins!");
    }
    //player winning options
    else if (playerMove === "rock" && computerMove === "scissors") {
      winner = 'player';
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
      console.log("Player wins!");
    }
    else if (playerMove === "paper" && computerMove === "rock") {
      winner = 'player';
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
      console.log("Player wins!");
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
      winner = 'player';
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
      console.log("Player wins!");
    }
    //if a draw
    else if (playerMove === computerMove) {
      winner = 'tie';
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
      console.log("It's a tie!");
    }
    return winner;
  }

//unit 5

function playToFive() {
  alert("Let's play a game of Rock, Paper, Scissors! You will be prompted to answer several times");
  var playerWins = 0;
  var computerWins = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  while (computerWins < 5 && computerWins < 5) {
    var computerMove;
    var playerMove;
    var winner = getWinner(computerMove, playerMove);
    if (winner === "computer") {
      computerWins++;
    }
    else if (winner === "player") {
      playerWins++;
    }
    else {
      winner;
      "You matched the computer... its a tie";
    }
  }
  alert('The computer won ' + computerWins + ' games! ' + 'You won ' + playerWins + '!');
  if (computerWins > playerWins) {
    alert('Unlucky the computer was too good this time');
  }
  else alert('You won! Congratulations!');
}

//This runs the game!
playToFive();