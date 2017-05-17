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
    var lava = [ballS, ballT, BallU, ballV, ballW, ballX, ballY, ballZ];
    

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
        lava[2] = random(0, 400);
        lava[5] = random(0, 400);
        lava[6] = random(0, 400);   
 
// If's 

    if(ballZ > 399) {
        
        lava[7] = random(-1, -13);  
        lava[6] = random(0, 400);
    }

    if(ballX > 399) {
        
        lava[5] = random(-1, -7);  
        lava[4] = random(0, 400);
    }

    if(ballV > 399) {
        
        lava[3] = random(-1, -3);  
        lava[2] = random(0, 400);
    }

    if(ballT > 399) {
        
        lava[1] = random(-1, -3);  
        lava[0] = random(0, 400);
    }
   
// Calls

    ball();
    potato();
    hearts(148, -147, 0);
   
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

function hearts(heartPosX, heartPosY, heartSi) {

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

function ball() {

    fill(255, 0, 0);

    ellipse(lava[6], lava[7], ballSizeX, ballSizeY);
    ellipse(lava[4], lava[5], ballSizeX, ballSizeY);
    ellipse(lava[2], lava[3], ballSizeX, ballSizeY);
    ellipse(lava[0], lava[1], ballSizeX, ballSizeY);

    lava[1] += random(5, 10);
    lava[3] += random(5, 10);
    lava[5] += random(5, 10);
    lava[7] += random(5, 10);
}
