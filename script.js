let inputNeed = document.getElementById("new-item-need")
let inputFood = document.getElementById("new-item-food")
let inputWant = document.getElementById("new-item-want")
let inputNeedBtn = document.getElementById("new-item-need-btn")
let inputFoodBtn = document.getElementById("new-item-food-btn")
let inputWantBtn = document.getElementById("new-item-want-btn")

nullAlert = ["You forgot to write something", "uhh you still forgot to write something...", "is this some kind of joke to you?", "...having fun?", "...", "you're still doing this?", "I don't know who's more bored, me or you", "alright I'm out of here"]


function addNeed(){
    if (inputNeed.value === ""){
        alert("I think you forgot to write something")
    } else {
    let needs = document.getElementById("need-list")
    let newNeed = document.createElement("li")
    let node = document.createTextNode(inputNeed.value)
    newNeed.appendChild(node)
    console.log(newNeed.textContent)
    needs.appendChild(newNeed)
    console.log(needs)
    
}
inputNeed.value = ""
}

function addWant(){
    if (inputWant.value === ""){
        alert("are you sure you don't want anything?")
    } else {
    let wants = document.getElementById("want-list")
    let newWant = document.createElement("li")
    let node2 = document.createTextNode(inputWant.value)
    newWant.appendChild(node2)
    wants.appendChild(newWant)
}
inputWant.value = ""
}

function addFood(){
    if (inputFood.value === ""){
        alert("No food for you")
    } else {
    let foods = document.getElementById("food-list")
    let newFood = document.createElement("li")
    let node3 = document.createTextNode(inputFood.value)
    newFood.appendChild(node3)
    foods.appendChild(newFood)
    
}
inputFood.value = ""
}

function show(){
   let needDiv = document.getElementById("needContainer")
    needDiv.classList.toggle("reveal")

}

function show2(){
    let wantDiv = document.getElementById("wantContainer")
    wantDiv.classList.toggle("reveal")

}

function show3(){
    let foodDiv = document.getElementById("foodContainer")
    foodDiv.classList.toggle("reveal")

}

let audio = document.getElementById("harvest");
audio.volume = 0.2; 

let needList = document.getElementById("need-list")
let wantList = document.getElementById("want-list")
let foodList = document.getElementById("food-list")

console.log(needList)
console.log(wantList)
console.log(foodList)

function save(){
localStorage.setItem("data", needList.innerHTML);
   localStorage.setItem("data2", wantList.innerHTML);
   localStorage.setItem("data3", foodList.innerHTML);
}

function load(){
    needList.innerHTML = localStorage.getItem("data");
    wantList.innerHTML = localStorage.getItem("data2");
    foodList.innerHTML = localStorage.getItem("data3");
}

function clear(){
    localStorage.clear();
}
