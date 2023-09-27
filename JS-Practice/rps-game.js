// Rock , Paper , Scissors game using :- while loop and an Array ;

let playerGame = confirm("Shall we play rock , paper , or scissors");
if (playerGame) {
  // play
  while (playerGame) {
    const playerChoice = prompt("Please enter rock , paper or scissor..");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? "Tie game"
            : playerOne === "rock" && computer === "paper"
            ? `playerone: ${playerOne}\n Computer: ${computer}\n Computer Wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerone: ${playerOne}\n Computer: ${computer}\n Computer Wins!`
            : playerOne === "paper" && computer === "rock"
            ? `playerone: ${playerOne}\n Computer: ${computer}\n Computer Wins!`
            : `playerone: ${playerOne}\n Computer: ${computer}\n PlayerOne Wins!`;

        alert(result);

        playerGame = confirm("Play Again?");
        if (!playerGame) {
          alert("Ok! thanks for playing...");
          continue;
        }
      } else {
        alert("You didn't enter rock , paper , scissors");
        continue;
      }
    } else {
      alert("I guess you changes your mind . Maybe next time...");
      break;
    }
  }
} else {
  alert("Ok , may be next time...");
}
