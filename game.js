// Iteration 2: Generate 2 random number and display it on the screen
// Math random low 0 high < 1
//DECLARING TWO RAANDOM VARIABLES FROM 0 TO 99 BECAUSE OF FLOOR  
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);

// SELECTING TWO NUMBER BOXES in the hrml 
let num1_box = document.getElementById("number1")
let num2_box = document.getElementById("number2")

num1_box.textContent = num1
num2_box.textContent = num2

// generating random numbers using a function and sending those numbers in the number boxes
function generateRandomNumners() {

    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);

    num1_box.textContent = num1
    num2_box.textContent = num2

}

// Iteration 3: Make the options button functional
let score = 0;
var lesser_than = document.getElementById("lesser-than")
var equal_to = document.getElementById("equal-to")
var greater_than = document.getElementById("greater-than")

greater_than.onclick = () => { // incrementing the score only when the condition of if is satisfied
    if (num1 > num2) {
        score++;
    

        Update()
    } else {
        window.open("./gameover.html", "_self")
    }
}

equal_to.onclick = () => {
    if (num1 == num2) {
        score++;
    
       Update()
    } else {
        window.open("./gameover.html", "_self")
    }
}

lesser_than.onclick = () => {
    if (num1 < num2) {
        score++;
    
        Update()
    } else {
        window.open("./gameover.html", "_self")
    }
}
// Iteration 4: Build a timer for the game

let time;
let timer_box = document.getElementById("timer")
timer_box.textContent = time;
let interval;

function timerStart() {
    time = 5; // maximum limit of timer 
    timer_box.textContent = time;
     interval = setInterval(() => {
    
         if (time == 0) {
             clearInterval(interval)
             location.href = "./gameover.html"
            }
        timer_box.textContent = time;    
        time--;
        }, 1000)
}


function Update(){
    generateRandomNumners() // for generating next set of random numbers if clearing the current level
    console.log(score);
    localStorage.setItem("score",score); // FOR updating 
    clearInterval(interval) // for clearing the old timer
    timerStart()            // for starting the new timer
}

timerStart()
localStorage.setItem("score",0)