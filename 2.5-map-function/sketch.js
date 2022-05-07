
let r = 0;
let g = 127;
let b = 255;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    //background
    r = map(mouseX, 0, 600, 0, 255);
    g = map(mouseY, 0, 600, 255, 0);
    background(r, g, b);
    // ellipse
    fill(250, 118, 222);
    ellipse(mouseX, mouseY, 64, 64);
}

