// create two variable, firstCard and secondCard
// Set their values to a random number between 2-11

let firstCard = 0
let secondCard = 0
let cards = []
let sum = 0
let hasBlackjack = false
let isalive = false
let message = ""
let game_mess_El = document.getElementById("game-message-el")
let card_El = document.getElementById("card-el")
let res_El = document.getElementById("result-el")
let playerEl = document.getElementById("player-el")

let player = {
    Name: "Anson",
    Chips: 145,
    sayHello: function() {
        console.log("Hello")
    },

}

playerEl.textContent = player.Name + ": $ " + player.Chips

// Set a variable, sum, and set it to be the sum of firstcard and secondcard

function startgame(){

    cards = []

    cards.push(getrandomcard())
    cards.push(getrandomcard())

    sum = cards[0] + cards[1]

    isalive = true

    if (sum <= 20){
        message = "Do you want to draw a new card"
    } else if (sum === 21){
        message = "Wohoo! You' ve got Blackjack"
        hasBlackjack = true
    } else {
        message = "You 're out of the game"
        isalive = false
    }

    card_El.textContent = "Cards : "+ cards[0] + " " + cards[1]
    res_El.textContent = "Result : " + sum

    game_mess_El.textContent = message

}

function drawanothercard(){

    if (isalive === false || hasBlackjack === true) {
        return
    }

    new_card = getrandomcard()
    cards.push(new_card)

    sum += new_card

    if (sum <= 20){
        message = "Do you want to draw a new card"
    } else if (sum === 21){
        message = "Wohoo! You' ve got Blackjack"
        hasBlackjack = true
    } else {
        message = "You 're out of the game"
        isalive = false
    }

    card_El.textContent = "Card : "

    for (let i = 0; i < cards.length; i++){
        card_El.textContent += cards[i] + " "
    }
    res_El.textContent = "Result : " + sum

    game_mess_El.textContent = message


}

function getrandomcard(){
    let res = Math.floor(Math.random() * 13 +1)
    if (res === 1){
        res = 11
    }else if (res > 10){
        res = 10
    }

    return res
}

console.log(message)
console.log(hasBlackjack)
console.log(isalive)