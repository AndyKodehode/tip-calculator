let bill = document.querySelector("#bill")
let tip = document.querySelector("#tip")
let total = document.querySelector("#total")
let NrPeople = document.querySelector("#nr-people")
let tipProsent = document.querySelector(".tip-main-cont")
let reset = document.querySelector("#reset")
let costPerson = document.querySelector("#total-person")
let tipPerson = document.querySelector("#tip-person")


let individCost
let individTip
let totalCostAll
let tipCostAll
let cost 
let people
let prosent 
let TotalWithProsent


bill.addEventListener("input", executeAll)
    


tipProsent.addEventListener("click", function(e){
        prosent = e.target.value
        console.log(prosent)
        executeAll()
})

NrPeople.addEventListener("input", executeAll)

function executeAll() {
    CalcValues()
    updateValues()
}



function CalcValues(){
    // cost witout prosent//
    cost = parseFloat(bill.value)
    people = NrPeople.value

    console.log('NrPeople.value: ' +NrPeople.value)
    //cost without prosent pr pers//
    individCost = cost / people
    individCost = Math.floor(individCost)

    tipCostAll = cost * parseFloat(prosent)
    tipCostAll = Math.floor(tipCostAll)
    TotalWithProsent = cost + parseFloat(tipCostAll)
    //cost pr person with prosent//
    individTip = tipCostAll/people
    individTip = Math.floor(individTip)
    individCost = individTip + individCost

}



function updateValues(){
    total.textContent = `$${cost}`
    tip.textContent = `$${tipCostAll.toFixed(2)}`
    costPerson.textContent = `$${individCost.toFixed(2)}`
    tipPerson.textContent = `$${individTip}` 
    total.textContent = `$${TotalWithProsent}`

    if(individTip === Infinity || isNaN(individTip)){
        costPerson.textContent = `$0.00`
        tipPerson.textContent = `$0.00` 
    }

    if(prosent === undefined){
        total.textContent = `$${bill.value}`
        tip.textContent = `$0.00`
    }
    
}

reset.addEventListener("click", function() {
    total.textContent= `$0.00`
    tip.textContent = `$0.00`
    costPerson.textContent = `$0.00`
    tipPerson.textContent =  `$0.00`
    bill.value = ""
    NrPeople.value =""
})