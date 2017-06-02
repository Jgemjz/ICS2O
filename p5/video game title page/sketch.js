/*Potato Dodge Game
2017-04-23 To 2017-06-01
Lucca*/

// GlObAl vAraIblEs

    // Potato

        var potatoX = 200;
        var potatoY = 200;
        var potatoSpot = 5;

    // Lava

        var lavaX;
        var lavaY;
        var lavaSize;

    // Hearts

        var tX = 200;
        var tY = 200;
        var bool = 2;

function setup() {

    createCanvas(400, 400);
    lavaX = random(5, 395);
    lavaY = -30;
    lavaSize = 50;
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
        textSize(21);
        text("Health", 310, 34);
        strokeWeight(1);
        line(308, 40, 374, 40);

    // Calls
    
        tY = 200;
        tX = 200;
        heart();
        tX = 228;
        heart();
        tX = 256;
        heart();
        potato();

        lava1();
        lava2();
        lava3();
}

// Lava Functions

    function lava1() {

        fill(255, 0, 0);
        ellipse(lavaX, lavaY, lavaSize, lavaSize);

        lavaY = lavaY+random(2, 6);
    }

    function lava2() {

        fill(255, 0, 0);
        ellipse(lavaX, lavaY, lavaSize, lavaSize);

        lavaY = lavaY+random(2, 6);
    }

    function lava3() {
        
        fill(255, 0, 0);
        ellipse(lavaX, lavaY, lavaSize, lavaSize);

        lavaY = lavaY+random(2, 6);
    }

function heart() {

    noStroke();

    if(bool==1) {
        fill(0, 0, 0);
        triangle(tX+108, tY-156, tX+101, tY-144, tX+114, tY-144);
        triangle(tX+120, tY-156, tX+114, tY-144, tX+127, tY-144);
        triangle(tX+113, tY-126, tX+101, tY-144, tX+127, tY-144);
    } else { 
        fill(215, 77, 222);
        triangle(tX+108, tY-156, tX+101, tY-144, tX+114, tY-144);
        triangle(tX+120, tY-156, tX+114, tY-144, tX+127, tY-144);
        triangle(tX+113, tY-126, tX+101, tY-144, tX+127, tY-144);
    }

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
         ellipse(mouseX-4, mouseY+7, potatoSpot, potatoSpot);
}
