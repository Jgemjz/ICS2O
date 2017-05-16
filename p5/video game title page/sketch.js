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
    
    var ballS = 200;
    var ballT = 0;
    var ballU = 200;
    var ballV = 0;
    var ballW = 200;
    var ballX = 0;
    var ballY = 200;
    var ballZ = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
    
    // Background
    
        background(145, 156, 163);
    
// If's 

    if(ballZ > 399) {
        
        ballZ = random(-1, -13);  
        ballY = random(0, 400);
    }

    if(ballX > 399) {
        
        ballX = random(-1, -7);  
        ballW = random(0, 400);
    }

    if(ballV > 399) {
        
        ballV = random(-1, -3);  
        ballU = random(0, 400);
    }

    if(ballT > 399) {
        
        ballT = random(-1, -3);  
        ballS = random(0, 400);
    }
    
// Calls

    ball();
    potato();
    hearts(148, -147, 0);
    
}

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

        ballS = random(0, 400);
        ballU = random(0, 400);
        ballW = random(0, 400);
        ballY = random(0, 400);

function = potato() {
    
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

function = hearts(heartPosX, heartPosY, heartSi) {

// Junk

    noStroke();
    strokeWeight(2);
    fill(173, 19, 173);

// Bumps
    
    ellipse(heartPosX + 200, heartPosY + 200, heartSizeX + 36, heartSizeY + 60);
    ellipse(heartPosX + 236, heartPosY + 200, heartSizeX + 36, heartSizeY + 60);

// Filler

    ellipse(heartPosX + 217, heartPosY + 218, heartSizeX + 50, heartSizeY + 50);

// Bottom

    triangle(heartPosX + 215, heartPosY + 294, heartPosX + 252, heartPosY + 216, 
    heartPosX + 182, heartPosY + 208);

}    

function = ball() {

    fill(255, 0, 0);

    ellipse(ballY, ballZ, ballSizeX, ballSizeY);
    ellipse(ballW, ballX, ballSizeX, ballSizeY);
    ellipse(ballU, ballV, ballSizeX, ballSizeY);
    ellipse(ballS, ballT, ballSizeX, ballSizeY);

    ballT += random(5, 10);
    ballV += random(5, 10);
    ballX += random(5, 10);
    ballZ += random(5, 10);
}
