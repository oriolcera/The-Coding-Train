function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(80, 80, 250);
    fill(200, 0, 0, 175);
    stroke(0,255,0)
    rect(175, 0, 75, 150);
    rect(30, 20, 55, 55, 20);
    rect(100, 20, 55, 55, 20, 15, 10, 5);

    fill(250, 100, 0);
    stroke(255, 0, 0)
    ellipse(340, 50, 100, 75);
}

// tous toutes les forme qui sont appré le fill sont de sa coleur.

// appré l'espace le fill et changé par selui d'appré l'espace s'il y en a un, mème chose pour stroke.

// si on rajoute un quatrième nombre a une couleur sa devient un peut transparent.