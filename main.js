let gridAmount = 16;
let gridSquared = Math.pow(gridAmount, 2);

for (x=0; x<gridSquared;x++) {
    var board = document.createElement('div');
    board.className = "board";
   
    document.getElementById('container').appendChild(board);
    document.getElementById("container").style.gridTemplateColumns = `repeat(${gridAmount}, 1fr)`;
};

function resetGrid() {

  gridAmount = prompt("How many squares?", "");
  if (gridAmount <= 100 && gridAmount > 3) {
    document.getElementById("container").innerHTML ="";
    gridSquared = Math.pow(gridAmount, 2);
  for (x=0; x<gridSquared;x++) {
    var board = document.createElement('div');
    board.className = "board";

    document.getElementById('container').appendChild(board);
    document.getElementById("container").style.gridTemplateColumns = `repeat(${gridAmount}, 1fr)`;
  };
} else if (isNaN(gridAmount)) {
   alert("It is not a number. Please enter a number from 4 to 100", "");
   resetGrid();
} else {
    alert("Your number (" + gridAmount + ") is not in range. Please enter a number from 4 to 100", "");
   resetGrid();
  };
};