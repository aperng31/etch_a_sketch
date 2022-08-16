//initial dimension
let size = 16;
let initial = true;
let penColor = 'black';

//elements of grid, enter button, and entered desired size of grid
const grid = document.querySelector(".grid");
const enter = document.querySelector("#enter");
const text = document.querySelector("#numPixels");

//initial fill-in of grid
drawGrid();
let boxes = grid.childNodes;
boxes.forEach(box => box.addEventListener('mouseover', hovered)); //check when boxes are "mouseover"-ed

//re-draw grid based on input dimensions
enter.addEventListener('click', drawGrid);

//functioning eraser button
const clear = document.querySelector(".clear");
clear.addEventListener('click', clearBoxes);

//change color of pen
const colorButton = document.querySelector('#colorButton');
const colorPalette = document.querySelector('#colorChanger');
colorButton.addEventListener('click', changeColor);

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

        grid.appendChild(newBox);
    }

    if (!initial) { //if not initial startup
        boxes = grid.childNodes;
        boxes.forEach(box => box.addEventListener('mouseover', hovered));  
    }
    initial = false;
}

function hovered() {
    this.style.background = `${penColor}`;
}

function clearBoxes() {
    boxes.forEach(box => box.style.background = 'white');
}

function changeColor() {
    penColor = colorPalette.value;
}