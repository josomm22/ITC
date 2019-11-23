let mouseDownFlag = false;
let color = "black";
let brush = "size1";
let shape = "square";
const paintArea = document.getElementsByClassName("paint-area")[0];
let Area;
let saveBtn = document.getElementById("save");
let loadBtn = document.getElementById("load");
let painting = document.getElementsByClassName("brush");
saveBtn.addEventListener('click', paintSave);
loadBtn.addEventListener('click', paintLoad);
paintArea.addEventListener("mousedown", start);

function start() {
    mouseDownFlag = true;
    height = paintArea.offsetHeight;
    console.log(height);
    draw();
}
paintArea.addEventListener("mouseup", stop);
function stop() {
    mouseDownFlag = false;
}
// this is the color section
let colorPick = document.getElementsByClassName("color");
for (i = 0; i < colorPick.length; i++) {
    colorPick[i].addEventListener('click', function () {
        document.getElementById(color).classList.remove('select-grow');
        color = this.id;
        document.getElementById(color).classList.add('select-grow');
    });
}
// this is the shape and brush size

let brushSize = document.getElementsByClassName("brush-size");
for (i = 0; i < brushSize.length; i++) {
    brushSize[i].addEventListener('click', function () {
        document.getElementById(brush).classList.remove('select');
        brush = this.id;
        document.getElementById(brush).classList.add('select');
    });
}
let shapeTogglerBtn = document.getElementById("shapeToggle");
shapeTogglerBtn.addEventListener('click', toggleShape);
function toggleShape() {
    switch (shape) {
        case 'square':
            changeShapeBtn(shape, 1);
            shape = 'circle';
            changeShapeBtn(shape, 2);
            break;
        case 'circle':
            changeShapeBtn(shape, 1);
            shape = 'heart';
            changeShapeBtn(shape, 2);
            break;
        case 'heart':
            changeShapeBtn(shape, 1);
            shape = 'square';
            changeShapeBtn(shape, 2);
            break;
    }
}
function changeShapeBtn(shape, stage) {
    let brushBtn = document.getElementsByClassName('brush-btn');
    for (i = 0; i < brushBtn.length; i++) {
        if (stage === 1) {
            brushBtn[i].classList.remove(shape);
        }
        else {
            brushBtn[i].classList.add(shape);
        }

    }

}

paintArea.addEventListener("mousemove", draw);

function draw() {
    if (mouseDownFlag) {
        let coord = function () {
            let area = paintArea.getBoundingClientRect();
            startX = area.left;
            startY = area.top;
            let x = event.clientX - startX;
            let y = event.clientY - startY;

            // let coordi3 = 'print x ' + x + 'and ' + y;
            // console.log(coordi3);

            if (x <= 500 && y <= 500) {
                let pixel = document.createElement("div");
                pixel.className = 'brush';
                pixel.classList.add(shape);
                pixel.classList.add(brush);
                pixel.classList.add(color);
                pixel.style.top = y + 'px'
                pixel.style.left = x + 'px'
                paintArea.append(pixel);
            }


        }
        coord();
    }


}
// found this on SO, I understand it but it's much cleaner than anything I would have come up with
clear.onclick = () => {
    while (paintArea.firstChild) {
        paintArea.removeChild(paintArea.firstChild);
    }
}
function changeAreaSize(size) {
    paintArea.style.height = size + 'px';
    paintArea.style.width = size + 'px';
}

function paintSave() {
    let paintStore = [];
    for (i = 0; i < painting.length; i++) {
        let dot = [];
        let classInfo = painting[i].className;
        let styleTop = painting[i].style.top;
        let styleLeft = painting[i].style.left;
        dot.push(classInfo);
        dot.push(styleTop);
        dot.push(styleLeft);
        paintStore.push(dot);

    }
    let paintData = JSON.stringify(paintStore);

    localStorage.setItem('painting1', paintData);
}
// I coded this function and it worked from the first try
function paintLoad() {
    let paintData = localStorage.getItem('painting1');
    if (paintData != null) {
        while (paintArea.firstChild) {
            paintArea.removeChild(paintArea.firstChild);
        }
        paintStore = JSON.parse(paintData);
        for (i = 0; i < paintStore.length; i++) {
            let classInfo = paintStore[i][0];
            let styleTop = paintStore[i][1];
            let styleLeft = paintStore[i][2];
            let pixel = document.createElement("div");
            pixel.className = classInfo;
            pixel.style.top = styleTop;
            pixel.style.left = styleLeft;
            paintArea.append(pixel);
        }
    }


}