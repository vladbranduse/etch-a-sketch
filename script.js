let newGrid = document.getElementById("newGrid");
let container = document.getElementById("container");

function createNewGrid(numberOfSquaresPerSide) {
    let squareSize = 960 / numberOfSquaresPerSide;
    for (let i = 0; i < numberOfSquaresPerSide; i++) {
        let row = document.createElement("div");
        row.style.borderColor = "black";
        row.style.borderStyle = "ridge";
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.width = "850px";
        row.style.height = "auto";
        container.appendChild(row);
        for (let j = 0; j < numberOfSquaresPerSide; j++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.borderColor = "black";
            square.style.borderStyle = "ridge";
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;    
            row.appendChild(square);
        }
    }
    let sq = document.getElementsByClassName("square");
    let sqBrightness = new Array(sq.length).fill(1);
    for (let i = 0; i < sq.length; i++) {
        sq[i].addEventListener("mouseover", () => {
            let colorArr = [];
            for (let j = 0; j < 3; j++) {
                colorArr.push(Math.floor(Math.random() * 256));
            }
            sq[i].style.backgroundColor = `rgb(${colorArr.join(",")})`;
            sqBrightness[i] -= 0.1;
            sq[i].style.filter = `brightness(${sqBrightness[i]})`;
        });
    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
newGrid.addEventListener("click", () => {
    let arrayOfPossibleNumbersOfSquaresPerSide = [];
    for (let i = 0; i <= 100; i++) {
        arrayOfPossibleNumbersOfSquaresPerSide.push(i);
    }
    let numberOfSquaresPerSide = prompt("How many squares per side do you want?");
    if (numberOfSquaresPerSide !== null && Number(numberOfSquaresPerSide) !== 0 && numberOfSquaresPerSide.trim !== "") {
        if (arrayOfPossibleNumbersOfSquaresPerSide.includes(Number(numberOfSquaresPerSide))) {
            removeAllChildNodes(container);
            createNewGrid(Number(numberOfSquaresPerSide));
        } 
    }
});

function createGrid() {
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
            square.className = "square";
            square.style.borderColor = "black";
            square.style.borderStyle = "ridge";
            square.style.width = "50px";
            square.style.height = "50px";    
            row.appendChild(square);
        }
    }
    let sq = document.getElementsByClassName("square");
    let sqBrightness = new Array(sq.length).fill(1);
    for (let i = 0; i < sq.length; i++) {
        sq[i].addEventListener("mouseover", () => {
            let colorArr = [];
            for (let j = 0; j < 3; j++) {
                colorArr.push(Math.floor(Math.random() * 256));
            }
            sq[i].style.backgroundColor = `rgb(${colorArr.join(",")})`;
            sqBrightness[i] -= 0.1;
            sq[i].style.filter = `brightness(${sqBrightness[i]})`;
        });
    }
}
createGrid();