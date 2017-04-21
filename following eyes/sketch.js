/*Eyes Following Mouse!!!
2017-04-20
Lucca*/

// Variables
    
    var posX = 200;
    var posY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {

// Background
    
    background(209, 193, 146);

// Calls

    eyeWhites();
    pupils();
    brows();
    mouth();
}
// Functions

    function eyeWhites() {
        
        // Eye 1
            fill(255, 255, 255);
            ellipse(posX-67, posY, 80, 41);
        // Eye 2
            ellipse(posX+67, posY, 80, 41);
}
    
    function pupils() {
        
        shiftX=(mouseX-200)/18;
        shiftY=(mouseY-200)/30;
        
        fill(0, 0, 0);
        ellipse(posX-67+shiftX, posY+shiftY, 30, 30);
            
        fill(255, 255, 255);
        ellipse(posX-67+shiftX, posY+shiftY, 10, 10);
        
        fill(0, 0, 0);
        ellipse(posX+67+shiftX, posY+shiftY, 30, 30);
            
        fill(255, 255, 255);
        ellipse(posX+67+shiftX, posY+shiftY, 10, 10);
    }
    
    function brows() {
        
        fill(122, 71, 73);
        quad(100, 167, 162, 167, 177, 155, 85, 145);
        
        quad(231, 167, 298, 167, 317, 145, 219, 155);
}
    
    function mouth() {
        
        line(150, 260, 250, 260);
}
