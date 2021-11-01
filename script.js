
let bill = document.querySelector("#bill")
let tip = document.querySelector("#tip")
let total = document.querySelector("#total")
let NrPeople = document.querySelector("#nr-people")
let tipProsent = document.querySelector(".tip-main-cont")
let reset = document.querySelector("#reset")
let costPerson = document.querySelector("#total-person")
let tipPerson = document.querySelector("#tip-person")

let cost = null
//get the input into total//
bill.addEventListener("input", function(){
{cost = bill.value

total.textContent = `$${cost}`
//bill.value = ""
}
}

)



//make bill times tip-prosent



//add click//
    let totalCostAll
    let tipCost

    tipProsent.addEventListener("click", function AddTips(e){

        console.log(e.target)
        tipCost = parseFloat(bill.value) * parseFloat(e.target.value)
        tipCost = Math.floor(tipCost)
        tip.textContent = `$${tipCost}`
        totalCostAll = parseFloat(bill.value) + tipCost
        total.textContent = `$${totalCostAll}`
        console.log(totalCostAll)
    
    })





//split the bill on amount of people?//
let people = 0

NrPeople.addEventListener("input", function(e) {
        people = e.target.value
        console.log(people, totalCostAll)
        let costPrPerson = parseFloat(totalCostAll)/ parseFloat(people)
        let tipPrPerson = parseFloat(tipCost)/parseFloat(people) 
        tipPrPerson = Math.floor(tipPrPerson).toFixed(2)
        costPrPerson = Math.floor(costPrPerson)
        costPerson.textContent = `$${costPrPerson}`
        tipPerson.textContent = `$${tipPrPerson}` 
        console.log(tipPrPerson)
    
    //console.log(costPrPerson)
    
    //if(people === ""){
        //costPerson.textContent = "0.00" }
    
}
    
)  

//reset t0 0//

reset.addEventListener("click", function() {
    total.textContent= `$0.00`
    tip.textContent = `$0.00`
    costPerson.textContent = `$0.00`
    tipPerson.textContent =  `$0.00`
    bill.value = ""
    NrPeople.value =""

})
