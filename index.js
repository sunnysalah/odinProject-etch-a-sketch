const container = document.querySelector("#container");
for(i=0;i<256;i++){
    let squares = document.createElement("div");
    squares.className = "squares";
    container.appendChild(squares);
}

