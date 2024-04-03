let currentPlayer = "X";
let array = Array(9).fill(null);
// let win = document.getElementsByClassName("message")[0];

function checkWinner() {
  if (
    (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
    (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
    (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
    (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
    (array[2] !== null && array[2] == array[4] && array[4] == array[6])
  ) {
    console.log(currentPlayer + " win!");
    let win = document.getElementsByClassName("message")[0];
    win.textContent = currentPlayer + " wins!";
    //  checkWinner="";
    let cells = document.querySelectorAll(".col");
      
  } else if (array.every((element) => element !== null)) {
    console.log("Draw!");
    let win = document.getElementsByClassName("message")[0];
    win.textContent = "Oops! The game is a draw!";
    let cells = document.querySelectorAll(".col");
    cells.forEach((cell) => cell.classList.add("hidden"));
  }
}
function restartGame() {
  // array.fill(null);
  console.log("Array empty" );
  // checkWinner();
  //  currentPlayer=="";
       let cells = document.querySelectorAll(".col");
    cells.forEach((cell) => cell.classList.add("hidden"));
    let btn=document.querySelector("button");
     btn.style.display="none"

}

function handleClick(el) {
  const id = Number(el.id);
  if (array[id] === null) {
    array[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}
