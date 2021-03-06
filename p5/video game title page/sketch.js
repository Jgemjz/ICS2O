/*Potato Dodge Video Game
2017-04-23 To 2017-06-19
Lucca*/ 

/*
	The variable bool will start at -1 and if bool is equal to -1 (Which it is) then it will call the startScreen function. Once you click the play button bool gets 1 so now bool is 0. 
	if bool is equal to or more than zero all of the functions in the main game will be called (like potato, lava[] and hearts) So the game will start.
	if mr. potato is within the hitbox of one of the lava balls bool gets 1 so if you get hit bool=bool+1.
	if bool is 0 then all hearts will be red (all lives) and numbers will start going up from one in the top left corner rapidly using the num variable that is 0 + 1.
	if bool is 1 the first heart will go black and the other two will still be red (One life lost).
	If bool is 2 the first two hearts will be black and the third heart will be red (Two lives lost).
	If bool is 3 or more the endScreen will be called and cover up the game with a black rect with the final words and num will be num+1 and num-1 so the ammount will hover at your distance score .
*/

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

	// variable indecating distance

		var num = 0;	

function setup() {

	createCanvas(400, 400);

	
	
		lavaSize = 60;
		bool = -1;
	
// If my variable bool is zero or more call the lavaAtTop function
	
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

// ball hitboxes/increasing bools value
	
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
	
	
	textSize(30)
	fill(0, 0, 0);
	text("POTATO DODGE!!!", 70, 45);
	
	textSize(25)
	fill(0, 0, 255);
	text("Instructions:", 120, 120);
	
	fill(0, 0, 255);
	textSize(18);
	text("Mr. Potato has a fear of being cooked alive. Help", 7, 150);
	text("him avoid his fear by keeping him away from the", 7, 170);
	text("dripping lava! You control Mr. Potato using the", 7, 190);  
	text("mouse. Good Luck!", 125, 210);  
	
	
	fill(0, 0, 0);
	textSize(32);
	text("Play?", 164, 360);
	 
	if (mouseIsPressed && (mouseX >= 140) && (mouseX <= 260) && (mouseY >= 320) && (mouseY <=385)) {
		
		bool=0;
	}
}

function endScreen() {

		fill(0, 0, 0);
		rect(0, 0, 400, 400);

		fill(240, 10, 10);
		textSize(45);
		text("Mr.Potato Been", 50, 100);
		textSize(42);
		text("Cooked!", 120, 150);

		textSize(14);
		text("Click Refresh To play again", 120, 380);

		if (bool >= 3) {
			fill(255, 0, 0);
			textSize(28);
			text("Mr. Potato Ran " + num + "km!", 75, 240);
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
