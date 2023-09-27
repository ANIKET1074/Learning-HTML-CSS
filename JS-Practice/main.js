// console.log("Hello world");

// console.log("Aniket".charAt(Math.floor(Math.random() * 6)));

// Rock paper scissor game

// let playGame = confirm("Shall we play rock,paper and scissors?");
// if (playGame) {
//   let playerChoice = prompt("Please enter rock,paper or scissors?");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);
//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? "Tie game"
//           : playerOne === "rock" && computer === "paper"
//           ? `playerone: ${playerOne}\n Computer: ${computer}\n Computer Wins!`
//           : playerOne === "paper" && computer === "scissors"
//           ? `playerone: ${playerOne}\n Computer: ${computer}\n Computer Wins!`
//           : playerOne === "paper" && computer === "rock"
//           ? `playerone: ${playerOne}\n Computer: ${computer}\n Computer Wins!`
//           : `playerone: ${playerOne}\n Computer: ${computer}\n PlayerOne Wins!`;

//       alert(result);

//       let playAgain = confirm("Play Again");
//       playAgain ? location.reload() : alert("Ok, thanks for playing..");
//     } else {
//       alert("You haven't enter rock,paper,scissors..");
//     }
//   } else {
//     alert("Looks like you have changed your mined..");
//   }
// } else {
//   alert("ok, may be we play next time..");
// }
