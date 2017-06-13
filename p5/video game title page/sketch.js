/*Potato Dodge Video Game
2017-04-23 To 2017-06-14
Lucca*/
 
/*
	I think I'll make -1 the start of bool and once you hit the start button bool+=1;
	I'll do this...
	
		if (bool ==-1) {
			startScreen();
		}

	I could make a button at the "game Over" screen that if it's pressed bool is -1 (starts Over).
*/

// GloBaL vArIaBleS

    // Potato
 
        var potatoX = 200;
        var potatoY = 200;
        var potatoSpot = 5;

    // Lava

        var lavaX = [10, 20, 30, 40, 50];
        var lavaY = [-30, -30, -30, -30, 30];
        var lavaSize;
        var speed = [2, 3, 4, 5, 6];

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

	// every time the the lava is drawn it starts at the top
	
		lavaAtTop();
		
    	lavaSize = 70;
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

    // moving the lava downwards and bringing the lava back to the top when it falls off the bottom
    
        for (var Q=0; Q<5; Q++) {
              lavaY[Q]=lavaY[Q]+speed[Q];
              if (lavaY[Q]>400) {
                  lavaY[Q]=-30;
                  lavaX[Q]=random(5, 395);
                  speed[Q]=random(4, 5);
              }
        }
    
    // CALLS

	redH = color(255, 0, 0);
	blackH = color(0, 0, 0);

        tY = 200;
        tX = 200;
	
	potato();
	
        heart1();
        heart2();
        heart3();

        lava1();
        lava2();
        lava3();
	lava4();
	lava5();
		
// ball hitboxes/increasing "bool"

	for (var Q=0; Q<5; Q++) {
		if ((mouseX >= (lavaX[Q] - lavaSize/2))
			&& (mouseX <= (lavaX[Q] + lavaSize/2))
			&& (mouseY >= (lavaY[Q] - lavaSize/2))
			&& (mouseY <= (lavaY[Q] + lavaSize/2))) {
			bool = bool+1;
			lavaAtTop();
		}	
	
		if (bool >= 3) {
			endScreen();
		}
	}
	
} // End of Draw Function!!!

	function lavaAtTop() {
		
		for (var Q=0; Q<5; Q++) {
		    lavaX[Q] = random(5, 395);
			lavaY[Q]=-30;
			
		}
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

	 function lava4() {

		fill(255, 0, 0);
		ellipse(lavaX[3], lavaY[3], lavaSize, lavaSize);
   	 }

	 function lava5() {

		fill(255, 0, 0);
		ellipse(lavaX[4], lavaY[4], lavaSize, lavaSize);
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

function startScreen() {
	
	// Stuff

        stroke(0, 0, 0);
        strokeWeight(0.5);

    // Potato

        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(200, 260, 43, 32);

    // Spots

         fill(168, 161, 65);
         ellipse(210, 208, potatoSpot, potatoSpot);
         ellipse(215, 204, potatoSpot, potatoSpot);
         ellipse(204, 207, potatoSpot, potatoSpot);
}

function endScreen() {

		fill(0, 0, 0);
		rect(0, 0, 400, 400);

		fill(240, 10, 10);
		textSize(30);
		text("Game Over", 110, 200);
		textSize(24);
		text("Click Refresh To play again", 30, 250);
 }
