let num_1_El = document.getElementById("num1-el")
let num_2_El = document.getElementById("num2-el")
let res_El = document.getElementById("res-el")

let num1 = 9
let num2 = 6
num_1_El.textContent = num1
num_2_El.textContent = num2

function add(){
    res_El.textContent = num1 + num2
}

function subtract(){
    res_El.textContent = num1 - num2
}

function divide(){
    res_El.textContent = num1 * num2
}

function multiply(){
    res_El.textContent = num1 / num2
}