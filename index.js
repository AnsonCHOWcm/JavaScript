// initial count as 0
//listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
let countEL = document.getElementById("count-el")

function increment(){
    console.log("The button was clicked")
    count = count + 1
    countEL.innerText = count
}

//creating a function for save purpose
function save(){
    console.log(count)
}

