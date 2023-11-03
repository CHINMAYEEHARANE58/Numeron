// Iteration 5: Store the player score and display it on the game over screen

const scoreBox = document.getElementById("score-board");

// will get the score from our vault
let passcode = localStorage.getItem("squad56");
console.log(passcode)

scoreBox.innerHTML = passcode;

const playAgain = document.getElementById("play-again-button")

playAgain.onclick = () =>{
    location.href = " ./game.html"
}
