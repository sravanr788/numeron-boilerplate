// Iteration 5: Store the player score and display it on the game over screen
let score_box = document.getElementById("score-board")

let value = localStorage.getItem("score");

score_box.textContent = value;





var playaagain = document.getElementById("play-again-button")

playaagain.onclick = () => {
    location.href="./game.html";
}