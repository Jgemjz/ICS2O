/*Potato Dodge Game
2017-04-23 To 2017-05-30
Lucca*/

// Golbal Varaibles

    // Potato

        var potatoX = 200;
        var potatoY = 200;
        var potatoSpot = 5;

    // Lava

        var lavaX = random(5, 395);;
        var lavaY = -30;
        var lavaSize = 50;
        var lava = [lava0, lava1, lava2, lava3]

    // Hearts

        var tX = random(5, 395);;
        var tY = -30;
        var bool = 1;

function setup() {

    createCanvas(400, 400);
}

// Lava Functions

    function lava0 = () {
    }

    function lava1 = () {

        fill(255, 0, 0);
        ellipse(lavaX, lavaY, lavaSize, lavaSize);

        lavaY+=1;
    }

    function lava2 = () {

        fill(255, 0, 0);
        ellipse(lavaX, lavaY, lavaSize, lavaSize);

        lavaY+=1;
    }

    function lava3 = () {

        fill(255, 0, 0);
        ellipse(lavaX, lavaY, lavaSize, lavaSize);

        lavaY+=1;
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

        tX=200;
        heart();
        tX=228;
        heart();
        tX=256;
        heart();
        potato();

        lava0();
        lava1();
        lava2();
        lava3();
}

function heart() {

    // Local Variables

        var pink = fill(215, 77, 222);
        var black = fill(0, 0, 0);

    noStroke();
    pink
    triangle(tX+108, tY-156, tX+101, tY-144, tX+114, tY-144);
    triangle(tX+120, tY-156, tX+114, tY-144, tX+127, tY-144);
    triangle(tX+113, tY-126, tX+101, tY-144, tX+127, tY-144);

    if(bool=1) {
    black;
    } else {
    pink;
    }

};

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
