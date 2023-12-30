let inputNeed = document.getElementById("new-item-need").value
let inputFood = document.getElementById("new-item-food").value
let inputWant = document.getElementById("new-item-want").value
let inputNeedBtn = document.getElementById("new-item-need-btn")
let inputFoodBtn = document.getElementById("new-item-food-btn")
let inputWantBtn = document.getElementById("new-item-want-btn")


function addNeed(){
    let needs = document.getElementById("need-list")
    let newNeed = document.createElement("li")
    let node = document.createTextNode(inputNeed)
    newNeed.appendChild(node)
    needs.appendChild(newNeed)
}

function addWant(){
    let wants = document.getElementById("want-list")
    let newWant = document.createElement("li")
    let node2 = document.createTextNode(inputWant)
    newWant.appendChild(node2)
    wants.appendChild(newWant)
}

function addFood(){
    let foods = document.getElementById("food-list")
    let newFood = document.createElement("li")
    let node3 = document.createTextNode(inputFood)
    newFood.appendChild(node3)
    foods.appendChild(newFood)
}