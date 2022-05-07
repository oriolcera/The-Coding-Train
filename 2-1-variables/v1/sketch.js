function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(mouseX, mouseY, mouseX);

    stroke(mouseY, mouseX, (mouseX + mouseY) / 8 );
    strokeWeight(10);
    fill(mouseX, mouseY, (mouseX + mouseY) / 2 );
    ellipse(mouseX, mouseY, 100);

    fill(mouseX / 2, mouseY / 2 , (mouseX + mouseY) / 2 );
    ellipse(mouseX, mouseY, 50);
}



