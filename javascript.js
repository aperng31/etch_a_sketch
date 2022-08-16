let size = 16;
let initial = true;

const grid = document.querySelector(".grid");
const enter = document.querySelector("#enter");
const text = document.querySelector("#numPixels");

drawGrid();
let boxes = grid.childNodes;
boxes.forEach(box => box.addEventListener('mouseover', hovered));

enter.addEventListener('click', drawGrid);

function getNum() {
    let inputNum = Number(text.value);

    if (typeof(inputNum) != 'number' || isNaN(inputNum)) {
        return null;
    }
    else if (!Number.isInteger(inputNum)) {
        return null;
    }
    else if (inputNum < 1 || inputNum > 100) {
        return null;
    }
    return inputNum;
}

function drawGrid() {

    if (!initial) { //if not initial startup
        size = getNum();
        if (!size) {
            return;
        }
    }
    const height = 960 / size;
    const width = 960 / size;

    grid.innerHTML = ''; //delete previous grid


    for (let i = 0; i < size**2; i++) {
        const newBox = document.createElement('div');
        newBox.style.height = `${height}px`;
        newBox.style.width = `${width}px`;
        newBox.classList.add('box');

        /*console.log(newBox.style.height);
        console.log(newBox.style.width);
        console.log(newBox);*/
        grid.appendChild(newBox);
    }

    if (!initial) { //if not initial startup
        boxes = grid.childNodes;
        boxes.forEach(box => box.addEventListener('mouseover', hovered));  
    }
    initial = false;
}

function hovered() {
    this.style.background = 'grey';
}