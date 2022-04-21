// your JavaScript file
let howmanyboxes = 16
const container = document.querySelector('#container');

for (let i = 0; i < howmanyboxes; i++) {
    let allrows=createrows()
    container.appendChild(allrows);
}

//CREATES ROWS OF 16 (Or however many is needed)
function createrows(){
    const row = document.createElement('div');
    row.classList.add("row1")
    row.style.color = "#FFFFFF"
    for (let i = 0; i < howmanyboxes; i++) {
        row.appendChild(createbox())
    }
        return (row)
    }
    

//CREATE BOXES WITHIN ROW
function createbox(){
const box = document.createElement('div');
box.classList.add("box1")
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "#000000"
    box.style.color = "#000000"
 });
box.textContent = 'Hi!';
box.style.color = "aqua"
box.style.border = '1px solid black'
return (box)
}

