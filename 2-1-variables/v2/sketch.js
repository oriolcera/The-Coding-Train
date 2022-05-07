let fr = 60
let b1 = 80
let b2 = 80
let b3 = 255

function setup() {
    createCanvas(400, 400);
    background(b1, b2, b3);
    frameRate(fr)
}
function draw() {
    // background(mouseX, mouseY, mouseX);

    stroke(mouseY, mouseX, (mouseX + mouseY) / 8 );
    strokeWeight(10);
    fill(mouseX, mouseY, (mouseX + mouseY) / 2 , mouseX);
    ellipse(mouseX + random(0,10), mouseY + random(0,10), 100, 100);

    fill(mouseX / 2, mouseY / 2 , (mouseX + mouseY) / 2 );
    ellipse(mouseX + random(0,5), mouseY + random(0,5), 50, 50);
}

function mousePressed() {
    background(b1, b2, b3)
}

