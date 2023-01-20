let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    render()
    inputEl.value = ""
})

//create a variable, listItems, to hold all HTML

function render (){

    let listItems = ""

for (let i = 0; i < myLead.length; i++){

    listItems += "<li><a target = '_blank' href='" +  myLead[i]  + "'>" + myLead[i] + "</a></li>"

}

ulEL.innerHTML = listItems

}

