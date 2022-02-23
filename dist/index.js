window.onload = function() {
  var tictactoe = ["", "", "", "", "", "", "", "", ""];
  var grid = document.getElementsByClassName("col-grid");
  var symbols = ["X", "O"];

  function reset_game() {
    for (var i = 0; i < tictactoe.length; i++) {
      tictactoe[i] = "";
      grid[i].innerHTML = "";
    }
  }

  function isGameOver() {
    /* 
      [ 
        0 1 2
        3 4 5
        6 7 8
      ]

      horizontal checks
      
      0 === 1 === 2
      3 === 4 === 5
      6 === 7 === 8

      vertical checks

      0 === 3 === 6
      1 === 4 === 7
      2 === 5 === 8

      diagonal checks
      0 === 4 === 8
      2 === 4 === 6

    */

    var gameOver = false;

    // row checks
    if (
      (tictactoe[0] === tictactoe[1] &&
        tictactoe[0] === tictactoe[2] &&
        tictactoe[0] !== "" &&
        tictactoe[1] !== "" &&
        tictactoe[2] !== "") ||
      (tictactoe[3] === tictactoe[4] &&
        tictactoe[3] === tictactoe[5] &&
        tictactoe[3] !== "" &&
        tictactoe[4] !== "" &&
        tictactoe[5] !== "") ||
      (tictactoe[6] === tictactoe[7] &&
        tictactoe[6] === tictactoe[8] &&
        tictactoe[6] !== "" &&
        tictactoe[7] !== "" &&
        tictactoe[8] !== "")
    ) {
      console.log("game done by row " + tictactoe);
      setTimeout(function() {
        alert("Game Over!");
      }, 500);
      gameOver = true;
      return gameOver;
    }

    // column checks
    if (
      (tictactoe[0] === tictactoe[3] &&
        tictactoe[0] === tictactoe[6] &&
        tictactoe[0] !== "" &&
        tictactoe[3] !== "" &&
        tictactoe[6] !== "") ||
      (tictactoe[1] === tictactoe[4] &&
        tictactoe[1] === tictactoe[7] &&
        tictactoe[1] !== "" &&
        tictactoe[4] !== "" &&
        tictactoe[7] !== "") ||
      (tictactoe[2] === tictactoe[5] &&
        tictactoe[2] === tictactoe[8] &&
        tictactoe[2] !== "" &&
        tictactoe[5] !== "" &&
        tictactoe[8] !== "")
    ) {
      console.log("game done by column");
      setTimeout(function() {
        alert("Game Over!");
      }, 500);
      gameOver = true;
      return gameOver;
    }

    // diagonal checks
    if (
      (tictactoe[0] === tictactoe[4] &&
        tictactoe[0] === tictactoe[8] &&
        tictactoe[0] !== "" &&
        tictactoe[4] !== "" &&
        tictactoe[8] !== "") ||
      (tictactoe[2] === tictactoe[4] &&
        tictactoe[2] === tictactoe[6] &&
        tictactoe[2] !== "" &&
        tictactoe[4] !== "" &&
        tictactoe[6] !== "")
    ) {
      console.log("game done by diagonal");
      gameOver = true;
      setTimeout(function() {
        alert("Game Over!");
      }, 500);
      return gameOver;
    }

    return gameOver;
  }

  var computerClick = function() {
    var cell = "";
    var isEmptyGrid = false;

    for (var i = 0; i < tictactoe.length; i++) {
      if (tictactoe[i] === "") {
        cell = i;
        isEmptyGrid = true;
        break;
      }
    }
    if (isEmptyGrid === false) {
      alert("No Winner!");
    }
    return cell;
  };

  var playerClick = function() {
    var cell;
    cell = this.getAttribute("data-grid");
    tictactoe[cell] = player_symbol;
    this.innerHTML = player_symbol;
    if (!isGameOver()) {
      cell = computerClick();
      tictactoe[cell] = computer_symbol;
      var compGrid = document.querySelector(`[data-grid="${cell}"]`);
      compGrid.innerHTML = computer_symbol;
      isGameOver();
    }
  };

  // assign a symbol randomly to a player and computer
  var player_symbol = symbols[Math.floor(Math.random() * symbols.length)];
  var computer_symbol = symbols.filter(function(symbol) {
    return symbol !== player_symbol;
  })[0];

  document.getElementById("player_symbol").innerHTML = player_symbol;
  document.getElementById("computer_symbol").innerHTML = computer_symbol;
  var button = document.getElementById("reset");
  button.addEventListener("click", function() {
    reset_game();
  });

  for (var i = 0; i < grid.length; i++) {
    grid[i].addEventListener("click", playerClick, false);
  }
};
