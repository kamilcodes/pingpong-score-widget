const scorePlayer1 = document.querySelector("#scorePlayer1");
const scorePlayer2 = document.querySelector("#scorePlayer2");
const maxScoreSelect = document.querySelector("#maxScoreSelect");
const btnP1 = document.querySelector("#btnP1");
const btnP2 = document.querySelector("#btnP2");
const btnReset = document.querySelector("#btnReset");

// initial states
let scoreCounterP1 = 0;
let scoreCounterP2 = 0;
renderPoints();

function renderPoints() {
  scorePlayer1.textContent = scoreCounterP1;
  scorePlayer2.textContent = scoreCounterP2;
  checkScore();
  return;
}

// add points
btnP1.addEventListener("click", () => {
  scoreCounterP1++;
  renderPoints();
});
btnP2.addEventListener("click", () => {
  scoreCounterP2++;
  renderPoints();
});

// reset score keeper
btnReset.addEventListener("click", () => {
  let resetPoints = confirm("Do you really want to reset the score?");
  if (resetPoints) {
    scoreCounterP1 = 0;
    scoreCounterP2 = 0;
    renderPoints();
    btnP1.disabled = false;
    btnP2.disabled = false;
    scorePlayer1.style.color = "black";
    scorePlayer2.style.color = "black";
  }
});

//check who wins
function checkScore() {
  if (
    scoreCounterP1 === Number(maxScoreSelect.value) &&
    scoreCounterP2 !== Number(maxScoreSelect.value)
  ) {
    scorePlayer1.style.color = "green";
    scorePlayer2.style.color = "red";
    btnP1.disabled = true;
    btnP2.disabled = true;
  } else if (
    scoreCounterP1 !== Number(maxScoreSelect.value) &&
    scoreCounterP2 === Number(maxScoreSelect.value)
  ) {
    scorePlayer2.style.color = "green";
    scorePlayer1.style.color = "red";
    btnP1.disabled = true;
    btnP2.disabled = true;
  }
}
