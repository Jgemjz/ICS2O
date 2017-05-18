/*Potato Dodge Game
2017-04-23 To 2017-05-10
Lucca*/

// Varaibles

    var posX = 200;
    var posY = -30;
    var potatoX = 200;
    var potatoY = 200;
    var potatoSpot = 5;
    
function setup() {
    
    createCanvas(400, 400);
}

function draw() {
    
    // Background
    
        background(145, 156, 163);
    
    // Rectangle

        stroke(0, 0, 0);
        strokeWeight(2);
        fill(173, 135, 135);
        rect(290, 8, 101, 68);

    // Health

        fill(0, 0, 0);
        textSize(21);
        text("Health", 310, 34);
        line(308, 40, 374, 40);

    // Calls
    
        potato();
}

function potato() {
    
    // Stuff

        stroke(0, 0, 0);
        strokeWeight(0.5);

    // Potato

        fill(230, 197, 78);
        ellipse(mouseX, mouseY, 43, 32);

    // Spots

         fill(168, 161, 65);
         ellipse(mouseX-10, mouseY-8, potatoSpot, potatoSpot);
         ellipse(mouseX+15, mouseY-4, potatoSpot, potatoSpot);
         ellipse(mouseX+-4, mouseY+7, potatoSpot, potatoSpot);
}
