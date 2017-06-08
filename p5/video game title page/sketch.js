/*Potato Dodge Video Game
2017-04-23 To 2017-06-08
Lucca*/

// GloBaL vArIaBleS

    // Potato
 
        var potatoX = 200;
        var potatoY = 200;
        var potatoSpot = 5;

    // Lava

        var lavaX = [10, 20, 30];
        var lavaY = [-30, -30, -30];
        var lavaSize;
        var speed = [2, 3, 4];

    // Hearts

        var tX = 200;
        var tY = 200;
        var bool = 0;

    // HitBoxes

        var hitBoxX = 1;
        var hitBoxY = 1;

    // Heart colours

        var redH;
        var blackH;

function setup() {

    createCanvas(400, 400);

    // For Loop
    
        for (var Q=0; Q<3; Q++) {
            lavaX[Q] = random(5, 395);
            lavaY[Q] = -30;
        }
        
    lavaSize = 60;
	bool = 0;
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

    // For Loop
    
        for (var Q=0; Q<3; Q++) {
              lavaY[Q]=lavaY[Q]+speed[Q];
              if (lavaY[Q]>400) {
                  lavaY[Q]=-30;
                  lavaX[Q]=random(5, 395);
                  speed[Q]=random(3, 5);
              }
        }
    
    // CALLS

		redH = color(215, 77, 222);
		blackH = color(0, 0, 0);
		

        tY = 200;
        tX = 200;
    
        heart1();
        heart2();
        heart3();
    
        potato();
    
        lava1();
        lava2();
        lava3();
}

// If A Ball Is Hit

	if ((mouseX >= (lavaX[0] - lavaSize/2))
		&& (mouseX <= (lavaX[0] + lavaSize/2))
		&& (mouseY >= (lavaY[0] - lavaSize/2))
		&& (mouseY <= (lavaY[0] + lavaSize/2))) {
		bool = bool+1;
	}
	
	if ((mouseX >= (lavaX[1] - lavaSize/2))
		&& (mouseX <= (lavaX[1] + lavaSize/2))
		&& (mouseY >= (lavaY[1] - lavaSize/2))
		&& (mouseY <= (lavaY[1] + lavaSize/2))) {
		bool = bool+1;
	}
	
	if ((mouseX >= (lavaX[2] - lavaSize/2))
		&& (mouseX <= (lavaX[2] + lavaSize/2))
		&& (mouseY >= (lavaY[2] - lavaSize/2))
		&& (mouseY <= (lavaY[2] + lavaSize/2))) {
		bool = bool+1;
	}
	
// Heart Functions

    function heart1() {

            if (bool == 0) {
            fill(redH);
            }

            if (bool == 1) {
            fill(blackH);
            }

            if (bool == 2) {
            fill(blackH);
            }

            if (bool == 3) {
            fill(blackH);
            }

            noStroke();
            triangle(tX+108, tY-156, tX+101, tY-144, tX+114, tY-144);
            triangle(tX+120, tY-156, tX+114, tY-144, tX+127, tY-144);
            triangle(tX+113, tY-126, tX+101, tY-144, tX+127, tY-144);

    }

    function heart2() {

            if (bool == 0) {
            fill(redH);
            }

            if (bool == 1) {
            fill(redH);
            }

            if (bool == 2) {
            fill(blackH);
            }

            if (bool == 3) {
            fill(blackH);
            }

            noStroke();
            tX=tX+28;
            triangle(tX+108, tY-156, tX+101, tY-144, tX+114, tY-144);
            triangle(tX+120, tY-156, tX+114, tY-144, tX+127, tY-144);
            triangle(tX+113, tY-126, tX+101, tY-144, tX+127, tY-144);
    }

    function heart3() {

            if (bool == 0) {
            fill(redH);
            }

            if (bool == 1) {
            fill(redH);
            }

            if (bool == 2) {
            fill(redH);
            }

            if (bool == 3) {
            fill(blackH);
            }

            noStroke();
            tX=tX+28;            
            triangle(tX+108, tY-156, tX+101, tY-144, tX+114, tY-144);
            triangle(tX+120, tY-156, tX+114, tY-144, tX+127, tY-144);
            triangle(tX+113, tY-126, tX+101, tY-144, tX+127, tY-144);
    }

// Lava Functions

    function lava1() {

        fill(255, 0, 0);
        ellipse(lavaX[0], lavaY[0], lavaSize, lavaSize);
    }

    function lava2() {

        fill(255, 0, 0);
        ellipse(lavaX[1], lavaY[1], lavaSize, lavaSize);
    }

    function lava3() {

        fill(255, 0, 0);
        ellipse(lavaX[2], lavaY[2], lavaSize, lavaSize);
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
