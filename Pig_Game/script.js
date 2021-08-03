'use strict';

// selectors
const score1 = document.querySelector("#score--0")
const score2 = document.getElementById('score--1')
const currentScore1 = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')
const playerOne = document.querySelector(".player--0")
const playerTwo = document.querySelector('.player--1')

const diceImage = document.querySelector(".dice")
const buttonNew = document.querySelector(".btn--new")
const buttonRoll = document.querySelector(".btn--roll")
const buttonHold = document.querySelector(".btn--hold")



let scores, cScore, activePlayer, playing

const init = function() {
    scores = [0, 0] // player-1, player-2
    cScore = 0
    activePlayer = 0
    playing = true

    score1.textContent = 0
    score2.textContent = 0
    currentScore1.textContent = 0
    currentScore2.textContent = 0
    
    diceImage.classList.add('hidden')
    playerOne.classList.remove('player--winner')
    playerTwo.classList.remove('player--winner')
    playerOne.classList.add('player--active')
    playerTwo.classList.remove('player--active')
}

// call the init function
init()


const switchPlayer = function() {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1: 0
    cScore = 0
    playerOne.classList.toggle('player--active')
    playerTwo.classList.toggle('player--active')
}


buttonRoll.addEventListener('click', function() {

    if (playing) {
        // 1. Generate a random dice roll
        const randomDiceNumber = Math.trunc(Math.random()*6) + 1

        // 2. Dispay the dice
        diceImage.classList.remove('hidden')
        diceImage.src = `dice-${randomDiceNumber}.png`
        // 3. check for roll 1: if true switch to next player
        if (randomDiceNumber !== 1) {
            // add number to the current score
            cScore += randomDiceNumber
            document.getElementById(`current--${activePlayer}`).textContent = cScore
        } else {
            // Switch to next player
            switchPlayer()
        }
    }
})


// Holding current score
buttonHold.addEventListener('click', function() {

    if (playing) {
        // 1. Add score to active player
        scores[activePlayer] += cScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        
        // 2. check if player score is >= 100
        if (scores[activePlayer] >= 20) {
            playing = false
            diceImage.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            // Switch player
            switchPlayer()
        }
    }
})

// New game / restart
buttonNew.addEventListener('click', init)