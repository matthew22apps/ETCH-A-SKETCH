// your JavaScript file
let howmanyboxes = 16
let pixelcount = 500/howmanyboxes
let pixelpx = pixelcount + "px"
const container = document.querySelector('#container');
const resetrow = document.createElement('div');

for (let i = 0; i < howmanyboxes; i++) {
    let allrows=createrows(howmanyboxes,pixelpx)
    resetrow.appendChild(allrows);
}
resetrow.classList.add("resetrow")
container.appendChild(resetrow);

//CREATES ROWS OF 16 (Or however many is needed)
function createrows(howmany,pixelpx){
    const row = document.createElement('div');
    row.classList.add("row")
    row.style.color = "#FFFFFF"
    row.style.width = "500px"
    row.style.height = pixelpx
    for (let i = 0; i < howmany; i++) {
        row.appendChild(createbox(howmany,pixelpx))
    }
        return (row)
    }
    

//CREATE BOXES WITHIN ROW
function createbox(howmany,pixelpx){
const box = document.createElement('div');
box.classList.add("box")
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "#000000"
    box.style.color = "#000000"
 });
box.style.width = pixelpx
box.style.height = pixelpx
box.style.backgroundColor = "aqua"
box.style.border = '1px solid black'
return (box)
}

function resetnow() {
	var elements = document.getElementsByClassName('resetrow'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].remove()
	}


    const resetrow = document.createElement('div');
    let howmanyboxes = window.prompt("Enter How Many Squares","16");
    if (howmanyboxes >=1 && howmanyboxes <=100){
        let pixelcount = 500/howmanyboxes
        let pixelpx = pixelcount + "px"
        for (let i = 0; i < howmanyboxes; i++) {
            let allrows=createrows(howmanyboxes,pixelpx)
            resetrow.appendChild(allrows);
        }
        resetrow.classList.add("resetrow")
        container.appendChild(resetrow);
    }
    else (resetnow())

}