function oriol() {
    // Loop
    for (let i = 0; i < 10; i++) {
        // Fonction pour imprimer en console de P5
        // Cette foncion doit s'executer dans draw ou setup
        print("Oriol P5 " + i)
    }
}

// Foncion pour imprimer en console de Java Script
console.log("Oriol JS")

function setup() {
    createCanvas(400, 400);
    // Ici on appelle la fonction que nous avons crée.
    oriol();
}

function draw() {
    background(80, 80, 250);
    fill(200, 0, 0, 175);
    stroke(0,255,0);
    rect(175, 0, 75, 150);
    rect(30, 20, 55, 55, 20);
    rect(100, 20, 55, 55, 20, 15, 10, 5);

    fill(250, 100, 0);
    stroke(255, 0, 0);
    ellipse(340, 50, 100, 75);
}



