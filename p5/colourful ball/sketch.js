/*rainbow ball moving
2017-05-18
Lucca*/

// Variables

    var posX = -50;
    var posY = 54;
    var ballSize = 72;

function setup() {
    
  createCanvas(400, 400);
}

function draw() {

    // Background

        background(145, 65, 65);

    // Calls

        ball();
};

  function ball() {
        
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(posX, posY, ballSize, ballSize);
        
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(posX, posY+72, ballSize, ballSize);
        
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(posX, posY+144, ballSize, ballSize);
        
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(posX, posY+144+72, ballSize, ballSize);
        
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(posX, posY+288, ballSize, ballSize);
        
        if (posX > 430) {
        posX = -30;
        }
        
        posX += 2; 
    }

}
