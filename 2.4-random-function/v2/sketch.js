
let x, y, r, g, b;

function setup() {
    createCanvas(1200, 600);
    background(0);
}

function draw() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    x = random(width);
    y = random(height);
    noStroke();
    fill(r, g, b, 100);
    circle(x, y, 24);
}

function mousePressed() {
    background(0);
}

