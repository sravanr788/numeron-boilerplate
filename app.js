// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
var playbtn = document.getElementById("play-button")
playbtn.addEventListener("click" , redirect)

function redirect(){
    location.href="./game.html";
}