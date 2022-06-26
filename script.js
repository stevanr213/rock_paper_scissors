function computerPlay() {
  const hand = ["Rock", "Paper", "Scissors"];
  return hand[Math.floor(3 * Math.random())];
}

function toSentenceCase(input) {
  n = input.length;
  let result = "";
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      result = result.concat(input.charAt(i).toUpperCase());
    } else {
      result = result.concat(input.charAt(i).toLowerCase());
    }
  }
  return result;
}

function playerPlays() {
  let choise = prompt("!-> Chose: Rock | Paper | Scissors <-!");
  if (choise == null) {
    return false;
  }
  choise = toSentenceCase(choise);
  if (choise != "Rock" && choise != "Paper" && choise != "Scissors") {
    return "invalid";
  } else {
    return choise;
  }
}

function returnWin(playerSelection, computerSelection) {
  return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function returnLose(playerSelection, computerSelection) {
  return `You Lost! ${computerSelection} beats ${playerSelection}`;
}

function returnDraw(playerSelection, computerSelection) {
  return `Draw! ${playerSelection} and ${computerSelection}`;
}

function playRound(playerSelection, computerSelection) {
  let outcome = "";
  if (playerSelection == "Rock") {
    switch (computerSelection) {
      case "Paper":
        outcome = returnLose(playerSelection, computerSelection);
        break;
      case "Scissors":
        outcome = returnWin(playerSelection, computerSelection);
        break;
      case "Rock":
        outcome = returnDraw(playerSelection, computerSelection);
    }
  } else if (playerSelection == "Paper") {
    switch (computerSelection) {
      case "Paper":
        outcome = returnDraw(playerSelection, computerSelection);
        break;
      case "Scissors":
        outcome = returnLose(playerSelection, computerSelection);
        break;
      case "Rock":
        outcome = returnWin(playerSelection, computerSelection);
    }
  } else if (playerSelection == "Scissors") {
    switch (computerSelection) {
      case "Paper":
        outcome = returnWin(playerSelection, computerSelection);
        break;
      case "Scissors":
        outcome = returnDraw(playerSelection, computerSelection);
        break;
      case "Rock":
        outcome = returnLose(playerSelection, computerSelection);
    }
  }
  return outcome;
}

function game() {
  const numberOfRuounds = 5;
  let i = 1;
  let playerScore = 0;
  let computerScore = 0;
  while (i <= numberOfRuounds) {
    let playerChoice = playerPlays();
    if (!playerChoice) {
      console.log("Fortified... come back later!");
      break;
    }
    if (playerChoice == "invalid") {
      console.log("Invalid input!");
    } else {
      let computerChoice = computerPlay();
      let status = playRound(playerChoice, computerChoice);
      if (status == returnWin(playerChoice, computerChoice)) {
        playerScore++;
        i++;
      } else if (status == returnLose(playerChoice, computerChoice)) {
        computerScore++;
        i++;
      }
      console.log(status);
    }
  }
  if (playerScore > computerScore) {
    console.log(
      `Victory!\nScore:\nPlayer: ${playerScore}\nComputer: ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Defete. Try again!\nScore:\nPlayer: ${playerScore}\nComputer: ${computerScore}`
    );
  }
}
