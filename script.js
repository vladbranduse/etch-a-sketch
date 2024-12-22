for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.style.borderColor = "black";
    row.style.borderStyle = "ridge";
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.width = "850px";
    row.style.height = "auto";
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.style.borderColor = "black";
        square.style.borderStyle = "ridge";
        square.style.width = "50px";
        square.style.height = "50px";    
        row.appendChild(square);
    }
}