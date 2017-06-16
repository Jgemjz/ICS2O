/*Potato Dodge Video Game
2017-04-23 To 2017-06-16
Lucca*/ 
 
// GloBaL vArIaBleS

   	 // Potato

		var potatoX = 200;
		var potatoY = 200;
		var potatoSpot = 5;

    	// Lava

		var lavaX = [10, 20, 30, 40, 50, 60, 70];
		var lavaY = [-30, -30, -30, -30, -30, -30, -30];
		var lavaSize;
		var speed = [2, 3, 4, 5, 6, 7 , 8];

    	// Hearts

		var tX = 200;
		var tY = 200;
		var bool = -1;

    	// HitBoxes

		var hitBoxX = 1;
		var hitBoxY = 1;

    	// Heart colours

		var redH;
		var blackH;

	// Other

		var num = 0;	

function setup() {

	createCanvas(400, 400);

	// every time the the lava is drawn it starts at the top
	
		lavaSize = 60;
		bool = -1;

		if (bool >= 0) {
			lavaAtTop();
		}
}

function draw() {

	// Background

        	background(145, 156, 163);

		if (bool == -1) {
			startScreen();   
		}	
		
	// Distance
	
		if (bool >= 0) {
			fill(0, 0, 0);
			strokeWeight(0.5);
			text(num, 15, 20);
			num=num+1;
		}
	
		if (bool >= 3) {
			num=num;
		}
	
	// Rectangle
	
		if (bool >= 0) {
			stroke(0, 0, 0);
			strokeWeight(0.5);
			fill(173, 135, 135);
			rect(290, 8, 101, 68);
		}
	
	// Health
	
		if (bool >= 0) {
			fill(0, 0, 0);
			textSize(21);
			text("Health", 310, 34);
			strokeWeight(1);
			line(308, 40, 374, 40);
		}
   	 // moving the lava downwards and bringing the lava back to the top when it falls off the bottom
		if (bool >= 0) {
			for (var Q=0; Q<7; Q++) {
				 lavaY[Q]=lavaY[Q]+speed[Q];
				 if (lavaY[Q]>400) {
					lavaY[Q]=-30;
					lavaX[Q]=random(5, 395);
					speed[Q]=random(4, 5);
				 }
			}
		}

    // CALLS

	redH = color(255, 0, 0);
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
	lava4();
	lava5();
	lava6();
	lava7();

// ball hitboxes/increasing "bool"
	
	if (bool >= 0) {
		for (var Q=0; Q<7 && Q>=0; Q++) {
			if ((mouseX >= (lavaX[Q] - lavaSize/2))
				&& (mouseX <= (lavaX[Q] + lavaSize/2))
				&& (mouseY >= (lavaY[Q] - lavaSize/2))
				&& (mouseY <= (lavaY[Q] + lavaSize/2))) {
				bool = bool+1;
				lavaAtTop();
			}	
		}
	}
	
	if (bool >= 3) {
		endScreen();
	}

} // End of Draw Function!!!

	function lavaAtTop() {

		for (var Q=0; Q<7; Q++) {
		    lavaX[Q] = random(5, 395);
			lavaY[Q]=-30;

		}
	}

// Heart Functions

   	 function heart1() {
		 
		if (bool >= 0) {
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
    	}

	function heart2() {
		
		if (bool >= 0) {
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
	}

	function heart3() {
		
		if (bool >= 0) {
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
	}

// Lava Functions

	function lava1() {
		
		if (bool >= 0) {
			fill(255, 0, 0);
			ellipse(lavaX[0], lavaY[0], lavaSize, lavaSize);
		}
    	}

	function lava2() {
		
		if (bool >= 0) {
			fill(255, 0, 0);
			ellipse(lavaX[1], lavaY[1], lavaSize, lavaSize);
		}
   	 }

	function lava3() {
		
		if (bool >= 0) {
			fill(255, 0, 0);
			ellipse(lavaX[2], lavaY[2], lavaSize, lavaSize);
		}
    	}

	 function lava4() {
		 
		if (bool >= 0) {
			fill(255, 0, 0);
			ellipse(lavaX[3], lavaY[3], lavaSize, lavaSize);
		}
   	}

	 function lava5() {

		 if (bool >= 0) {
			fill(255, 0, 0);
			ellipse(lavaX[4], lavaY[4], lavaSize, lavaSize);
		 }
    	}

	function lava6() {

		if (bool >= 0) {
			fill(255, 0, 0);
			ellipse(lavaX[5], lavaY[5], lavaSize, lavaSize);
		}
	}

	function lava7() {

		if (bool >= 0) {
			fill(255, 0, 0);
			ellipse(lavaX[6], lavaY[6], lavaSize, lavaSize);
		}
	}

function potato() {

	if (bool >= 0) {
		// No Cheating!!!

			if (mouseX >= 390) {
				mouseX=385;
			}

			if (mouseY <= 10) {
				mouseY=15;
			}

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
}

function startScreen() {
	
	fill(153, 153, 0);
	rect(-1, -1, 401, 401);
	
	fill(153, 0, 153);
	rect(140, 320, 120, 55);
	
	fill(0, 0, 255);
	textSize(20)
	text("INSTRUCTIONS:", 110, 70);
	
	fill(0, 0, 255);
	textSize(17);
	text("Mr. Potato has a fear of being cooked alive. Help", 20, 125);
	text("him avoid his fear by keeping him away from the", 20, 150);
	text("dripping lava! When hit by a lava ball you'll lose", 20, 175);
	text("a life indecated by one of the three hearts going ", 20, 200);
	text("from red to black. If all hearts go black you lose, ", 20, 225);
	text("last as long as you can. You control Mr. Potato ", 20, 250);
	text("using the mouse, Good Luck!", 40, 275);
	
	fill(0, 0, 0);
	textSize(32);
	text("Play?", 164, 340);
	 
	if (mouseIsPressed && (mouseX >= 140) && (mouseX <= 260) && (mouseY >= 320) && (mouseY <=335)) {
		
		bool=0;
	}
}

function endScreen() {

		fill(0, 0, 0);
		rect(0, 0, 400, 400);

		fill(240, 10, 10);
		textSize(45);
		text("Potato Been", 70, 100);
		textSize(42);
		text("Cooked!", 120, 150);

		textSize(14);
		text("Click Refresh To play again", 120, 380);

		if (bool >= 3) {
			fill(255, 0, 0);
			textSize(28);
			text("You Flew: " + num + "km!", 100, 240);
			num=num-1;

			if (num>=0 && num <=100) {
				textSize(16);
				text("(Dude, You Suck)", 130, 280);
			}

			if (num>=101 && num<=500) {
				textSize(16);
				text("(You Did Okayish)", 145, 280);
			}

			if (num>=501 && num<=1000) {
				textSize(16);
				text("(Ehh, Not Bad)", 140, 280);
			}

			if (num>=1001 && num<=1500) {
			   	textSize(16);
				text("(Y'all Been Shreked)", 145, 280);
			}

			if (num>=1501 && num<=2000) {
			   	textSize(16);
				text("(Cool Beans!)", 145, 280);
			}

			if (num>=2001 && num<=2500) {
			   	textSize(16);
				text("(WOW!)", 175, 280);
			}

			if (num>=2501 && num<=3000) {
			   	textSize(16);
				text("(Really Good!)", 160, 280);
			}

			if (num>=3001 && num<=4000) {
			   	textSize(16);
				text("(Swaggy!)", 170, 280);
			}

			if (num>=4001 && num<=5000) {
			   	textSize(16);
				text("(Incredible!)", 160, 280);
			}

			if (num>=5001 && num<=6000) {
			   	textSize(16);
				text("(Sick!)", 175, 280);
			}

			if (num>=6001 && num<=7000) {
			   	textSize(16);
				text("(Y'all R Gud)", 150, 280);
			}

			if (num>=7001 && num<=8000) {
			   	textSize(16);
				text("(You Dun Did Gud)", 145, 280);
			}

			if (num>=8001 && num<=8999) {
			   	textSize(16);
				text("(Nice!)", 175, 280);
			}

			if (num>9000) {
			    	textSize(16);
				text("(OVER 9000!!!)", 140, 280);
			}
		}
 }

// END!
