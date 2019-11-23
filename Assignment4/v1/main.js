let mouseDownFlag = false;
let color = "black"
let brush = "square1"
const paintArea = document.getElementsByClassName("paint-area")[0];
let Area;
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
let bkBtn = document.getElementById("black");
let rdBtn = document.getElementById("red");
let blBtn = document.getElementById("blue");
let grBtn = document.getElementById("green");
let erBtn = document.getElementById("white");

bkBtn.addEventListener('click', checkColor);
rdBtn.addEventListener('click', checkColor);
blBtn.addEventListener('click', checkColor);
grBtn.addEventListener('click', checkColor);
erBtn.addEventListener('click', checkColor);
function checkColor() {
    console.log(this.id);
    color = this.id
}


// this is the shape and brush size
let sq0BTn = document.getElementById("square0");
let sq1BTn = document.getElementById("square1");
let sq2BTn = document.getElementById("square2");
let sq3BTn = document.getElementById("square3");
let sq4BTn = document.getElementById("square4");
let sq5BTn = document.getElementById("square5");
let ci0BTn = document.getElementById("circle0");
let ci1BTn = document.getElementById("circle1");
let ci2BTn = document.getElementById("circle2");
let ci3BTn = document.getElementById("circle3");
let ci4BTn = document.getElementById("circle4");
let ci5BTn = document.getElementById("circle5");
sq0BTn.addEventListener('click', checkBrush);
sq1BTn.addEventListener('click', checkBrush);
sq2BTn.addEventListener('click', checkBrush);
sq3BTn.addEventListener('click', checkBrush);
sq4BTn.addEventListener('click', checkBrush);
sq5BTn.addEventListener('click', checkBrush);
ci0BTn.addEventListener('click', checkBrush);
ci1BTn.addEventListener('click', checkBrush);
ci2BTn.addEventListener('click', checkBrush);
ci3BTn.addEventListener('click', checkBrush);
ci4BTn.addEventListener('click', checkBrush);
ci5BTn.addEventListener('click', checkBrush);

function checkBrush() {
    console.log(this.id);
    brush = this.id
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

            let coordi = 'mouse x ' + event.screenX + ' and ' + event.screenY;
            let coordi2 = 'start x ' + startX + 'and ' + startY;
            let coordi3 = 'print x ' + x + 'and ' + y;

            console.log(coordi3);
            if (x <= 500 && y <= 500) {
                let pixel = document.createElement("div");
                pixel.className = brush;
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
function changeAreaSize(size){
    paintArea.style.height = size+'px';
    paintArea.style.width = size+'px';
}
