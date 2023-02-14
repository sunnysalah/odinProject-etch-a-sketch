const container = document.querySelector("#container");
for(i=0;i<256;i++){
    let squares = document.createElement("div");
    squares.className = "squares";
    container.appendChild(squares);
}

document.querySelectorAll(".squares").forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.setAttribute("style", "background-color: black;")
    })
    square.addEventListener('mouseout', () => {
        square.setAttribute("style", "background-color: white;")
    })
})


