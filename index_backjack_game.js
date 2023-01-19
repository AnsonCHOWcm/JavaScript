// create two variable, firstCard and secondCard
// Set their values to a random number between 2-11

let = firstCard = 0
let secondCard = 0
let sum = 0
let hasBlackjack = false
let isalive = true
let message = ""
let game_mess_El = document.getElementById("game-message-el")
let card_El = document.getElementById("card-el")
let res_El = document.getElementById("result-el")

// Set a variable, sum, and set it to be the sum of firstcard and secondcard

function startgame(){

    firstCard = Math.floor(Math.random() * 10 +2)
    secondCard = Math.floor(Math.random() * 10 +2)

    sum = firstCard + secondCard

    if (sum <= 20){
        message = "Do you want to draw a bew card"
    } else if (sum === 21){
        message = "Wohoo! You' ve got Blackjack"
        hasBlackjack = true
    } else {
        message = "You 're out of the game"
        isalive = false
    }

    card_El.textContent = "Cards : "+firstCard + ", " + secondCard
    res_El.textContent = "Result : " + sum

    game_mess_El.textContent = "Game Message : " + message

}

console.log(message)
console.log(hasBlackjack)
console.log(isalive)