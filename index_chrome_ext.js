let myLead = []
const LeadsFromLocalStorage = localStorage.getItem("myLead")
if (JSON.parse(LeadsFromLocalStorage)){
    myLead = JSON.parse(LeadsFromLocalStorage)
} else {
    myLead = []
}
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("del-btn")
const ulEL = document.getElementById("ul-el")

const tabBtn = document.getElementById("tab-btn")

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    render(myLead)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLead))
})

tabBtn.addEventListener("click", function(){
    //Grab the current URL 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        render(myLead)
        localStorage.setItem("myLead", JSON.stringify(myLead))
    })

})

delBtn.addEventListener("dblclick", function() {
    ClearLocalLeads()
    myLead = []
    render(myLead)
})

render(myLead)

//create a variable, listItems, to hold all HTML

function render (leads){

    let listItems = ""

for (let i = 0; i < leads.length; i++){

    //listItems += "<li><a target = '_blank' href='" +  myLead[i]  + "'>" + myLead[i] + "</a></li>"
    listItems += `
                 <li>
                     <a target = '_blank' href = '${leads[i]}'>
                     ${leads[i]}
                     </a>
                </li>
    `
}

ulEL.innerHTML = listItems

}

function ClearLocalLeads(){
    localStorage.clear()
}



