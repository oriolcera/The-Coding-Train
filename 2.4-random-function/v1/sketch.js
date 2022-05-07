//flow /variables
//code  programing witth p5.js

let squareSize;
let lineWidth;

function setup() {
    createCanvas(400, 300);
    background(100);
}

function draw() {
  //  background(100);

    squareSize = random(50, 100);
    lineWidth = random(2, 10);
    rectMode(CENTER)
    strokeWeight(lineWidth);
    fill = random(5, 10);
    stroke(0, 0, 255, 10);
    square(200, 150, squareSize);
}



