function myFunction() {
  var player1 = Math.ceil(Math.random() * 6);
  var player2 = Math.ceil(Math.random() * 6);
  document.querySelector(".img1").setAttribute("src", "images/dice" + player1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + player2 + ".png");

  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
  } else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
