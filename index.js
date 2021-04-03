var playerOneName = prompt("Enter Player 1 Name: ");
var playerTwoName = prompt("Enter Player 2 Name: ");

document.querySelectorAll(".dice p")[0].innerText = playerOneName;
document.querySelectorAll(".dice p")[1].innerText = playerTwoName;


function myFunction() {
  var player1 = Math.ceil(Math.random() * 6);
  var player2 = Math.ceil(Math.random() * 6);
  document.querySelector(".img1").setAttribute("src", "images/dice" + player1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + player2 + ".png");

  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩 " + playerOneName + " wins";
  } else if (player2 > player1) {
    document.querySelector("h1").innerHTML = playerTwoName + " wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
