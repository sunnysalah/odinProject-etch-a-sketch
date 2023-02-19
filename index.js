const container = document.querySelector("#container");

let length = 960 / 16;

console.log(length);

for(i=0;i<256;i++){  //Makes divs
    let squares = document.createElement("div");
    squares.className = "squares";
    squares.style.width = length + "px";
    squares.style.height = length + "px";
    container.appendChild(squares);
}

document.querySelectorAll(".squares").forEach((square) => {  //Makes square black when mouse hovers, and then resets back to white on mouseout
    square.addEventListener('mouseover', () => {
        square.setAttribute("style", "background-color: black;")
    })
    square.addEventListener('mouseout', () => {
        square.setAttribute("style", "background-color: white;")
    })
})

function newGraph(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstElementChild);
    }

    let newSquareAmount = parseInt(prompt("How many squares would you like on each side?", "Enter a number between 1 and 100"));

    if(isNaN(newSquareAmount) || newSquareAmount < 1 || newSquareAmount > 100){
        do{
            newSquareAmount = parseInt(prompt("How many squares would you like on each side?", "Enter a number between 1 and 100"));
        }while(isNaN(newSquareAmount) || newSquareAmount < 1 || newSquareAmount > 100);
    }

    let totalSquares = newSquareAmount * newSquareAmount;

    let newLength = 960 / newSquareAmount;

    for(i=0;i<totalSquares; i++){
        let squares = document.createElement("div");
        squares.className = "squares";
        squares.style.height = newLength + "px";
        squares.style.width = newLength + "px";
        container.appendChild(squares);
    }

    container.setAttribute('style', 'grid-template-columns: repeat(' + newSquareAmount + ', 0fr)');

    document.querySelectorAll(".squares").forEach((square) => {  //Repeat code to make it work while the function is being called
        square.addEventListener('mouseover', () => {
            square.setAttribute("style", "background-color: black;")
        })
        square.addEventListener('mouseout', () => {
            square.setAttribute("style", "background-color: white;")
        })
    })
}




