let gridAmount = 16;

for (x=0; x<gridAmount;x++) {
    var board = document.createElement('div');
    board.className = "board";
    board.innerHTML = (`Grid: ${x}`);
    document.getElementById('container').appendChild(board);
};

function resetGrid() {
  //document.getElementById("board").width = "200px";
  //window.setInterval("refreshDiv()", 1);
  gridAmount = prompt("How many squares?", "");
  if (gridAmount <= 100 && gridAmount > 0) {
    document.getElementById("container").innerHTML ="";
  for (x=0; x<gridAmount;x++) {
    var board = document.createElement('div');
    board.className = "board";
    board.innerHTML = (`Grid: ${x}`);
    document.getElementById('container').appendChild(board);
  };
} else if (isNaN(gridAmount)) {
   alert("It is not a number. Please enter a number from 1 to 100", "");
   resetGrid();
} else {
    alert("Your number (" + gridAmount + ") is not in range. Please enter a number from 1 to 100", "");
   resetGrid();
  };
};