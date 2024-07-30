function playgame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.round(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    document.getElementById("computerChoice").textContent =
      computerChoice.toUpperCase();
    document.getElementById("Result").textContent = "Its a draw📍";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("computerChoice").textContent =
      computerChoice.toUpperCase();
    document.getElementById("Result").textContent = "You Win🥳";
  } else {
    document.getElementById("computerChoice").textContent =
      computerChoice.toUpperCase();
    document.getElementById("Result").textContent = "You Lose😖";
  }
}
