let myLead = []
let LeadsFromLocalStorage = localStorage.getItem("myLead")
if (JSON.parse(LeadsFromLocalStorage)){
    myLead = JSON.parse(LeadsFromLocalStorage)
} else {
    myLead = []
}
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    render()
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLead))
})

render()

//create a variable, listItems, to hold all HTML

function render (){

    let listItems = ""

for (let i = 0; i < myLead.length; i++){

    //listItems += "<li><a target = '_blank' href='" +  myLead[i]  + "'>" + myLead[i] + "</a></li>"
    listItems += `
                 <li>
                     <a target = '_blank' href = '${myLead[i]}'>
                     ${myLead[i]}
                     </a>
                </li>
    `
}

ulEL.innerHTML = listItems

}



