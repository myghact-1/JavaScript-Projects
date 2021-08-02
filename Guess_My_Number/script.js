'use strict';

let secretNumber = Math.trunc(Math.random()*200) + 1

let score = 20
let highscore = 0

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message
}
// game logic
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        displayMessage("🍿 No Number!")
    
    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--
            document.querySelector(".score").textContent = score
            displayMessage(guess > secretNumber ? "📈 Too High!": "📉 Too Low!")
        } else {
            document.querySelector('.score').textContent = 0
            displayMessage("🔥 You lost the game!")
            document.querySelector("body").style.backgroundColor = '#f11111'
        }
    } else {
        displayMessage("✔ Congratulations!!!")
        document.querySelector(".number").textContent = secretNumber
        document.querySelector("body").style.backgroundColor = '#60b347'
        document.querySelector(".number").style.width = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector(".highscore").textContent = highscore
        }
    }
})

// restart game with again button
document.querySelector(".again").addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1

    displayMessage("Start guessing...")
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ''
    document.querySelector("body").style.backgroundColor = '#222'
    document.querySelector(".number").style.width = '15rem'

})
