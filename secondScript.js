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


bill.addEventListener("input", CalcValues)
bill.addEventListener("input", updateValues)
    


tipProsent.addEventListener("click", function(e){
        prosent = e.target.value
        CalcValues()
        updateValues() 
    
    
    //console.log(cost)
})

NrPeople.addEventListener("input", CalcValues)
NrPeople.addEventListener("input", updateValues)



function CalcValues(e){
    // cost witout prosent//
    cost = bill.value

    console.log(bill.value)
    
    //cost without prosent pr pers//
    people = NrPeople.value
    individCost = parseFloat(cost)/ parseFloat(people)
    individCost = Math.floor(individCost).toFixed(2)
    
    //cost with prosent//
    
    console.log(prosent)
    tipCostAll = parseFloat(cost) * parseFloat(prosent)
    tipCostAll = Math.floor(tipCostAll).toFixed(2)
    TotalWithProsent = parseFloat(bill.value) + parseFloat(tipCostAll)

    //cost pr person with prosent//
    individTip = parseFloat(tipCostAll)/parseFloat(people) 
    individTip = Math.floor(individTip).toFixed(2)
    individCost = parseFloat(individTip)+ parseFloat(individCost)
    

    

}



function updateValues(){
    total.textContent = `$${cost}`
    console.log(cost)
    tip.textContent = `$${tipCostAll}`
    costPerson.textContent = `$${individCost}`
    tipPerson.textContent = `$${individTip}` 
    total.textContent = `$${TotalWithProsent}`

    console.log(individTip, individCost)

    if(individTip===NaN||Infinity){
        costPerson.textContent = `$0.00`
        tipPerson.textContent = `$0.00` 
    }

    if(prosent===undefined){
        total.textContent = `$${bill.value}`
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