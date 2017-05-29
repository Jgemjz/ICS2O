/*Potato Dodge Game
2017-04-23 To 2017-05-29
Lucca*/

// Varaibles

    var tX = 200;
    var tY = 200;
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
        strokeWeight(0.5);
        fill(173, 135, 135);
        rect(290, 8, 101, 68);

    // Health

        fill(0, 0, 0);
        textSize(20);
        text("Health", 310, 34);
        strokeWeight(1);
        line(308, 40, 374, 40);

    function heart() {

    noStroke();
    fill(215, 77, 222);
    triangle(tX+108, tY-156, tX+101, tY-144, tX+114, tY-144);
    triangle(tX+120, tY-156, tX+114, tY-144, tX+127, tY-144);
    triangle(tX+113, tY-126, tX+101, tY-144, tX+127, tY-144);

    };
    
    // Calls
    
        potato();
        heart();
        tX+=28;
        heart();
        tX+=29;
        heart();
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
