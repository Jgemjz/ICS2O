/*Potato Dodge Game
2017-04-23 To 2017-05-10
Lucca*/

// Varaibles

    var posX = 200;
    var posY = -30;
    var ballSizeX = 50;
    var ballSizeY = 55;
    var potatoX = 200;
    var potatoY = 200;
    var potatoSpot = 5;
    var heartPosX = 0;
    var heartPosY = 0;
    var heartSizeX = 0;
    var heartSizeY = 0;

    var ballX = 0;
    var ballY = 200;
    var lava = [ballX, ballY];
    

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

// Other Junk

        lava[0] = random(0, 400);
        lava[1] = random(0, 400);
        lava[0] = random(0, 400);
        lava[1] = random(0, 400);   
 
// If's 

    if(lava[0] > 399) {
        
        lava[0] = random(-1, -13);  
        lava[1] = random(0, 400);
    }

    if(lava[0] > 399) {
        
        lava[0] = random(-1, -7);  
        lava[1] = random(0, 400);
    }

    if(lava[0] > 399) {
        
        lava[0] = random(-1, -3);  
        lava[1] = random(0, 400);
    }

    if(lava[0] > 399) {
        
        lava[0] = random(-1, -3);  
        lava[1] = random(0, 400);
    }
   
// Calls

    ball();
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


function ball() {

    fill(255, 0, 0);

    ellipse(lava[1], lava[0], ballSizeX, ballSizeY);
    ellipse(lava[1], lava[0], ballSizeX, ballSizeY);
    ellipse(lava[0], lava[0], ballSizeX, ballSizeY);
    ellipse(lava[1], lava[0], ballSizeX, ballSizeY);

    lava[0] += random(5, 10);
    lava[0] += random(5, 10);
    lava[0] += random(5, 10);
    lava[0] += random(5, 10);
}
