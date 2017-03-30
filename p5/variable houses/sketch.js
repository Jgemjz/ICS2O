
 /*houses with variables
2017-03-30
Lucca*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
 
noStroke();
   
  // Variables
    
        // House Variables
            var houseX=45;
            var houseY=220;
            var houseSize=146;
        
        // Roof Variables
           var roofX=houseX;
           var roofY=houseY-20;
           var roofSizeX=146;
           var roofSizeY=20;
       

 
    // Background+Grass
        background
        (112, 162, 237);
        fill(38, 138, 40);
        ellipse(200, 373, 568, 100);
        
    // House 1
        fill(110, 31, 130);
        rect(houseX, houseY, houseSize, houseSize);
       
        // Roof 1
            fill(217, 156, 70);
            rect(roofX, roofY, roofSizeX, roofSizeY);
        
    // Fixed Variables
            houseX=houseX+196;
            houseY=houseY+45;
            houseSize=houseSize-46;
            roofX=houseX;
            roofY=houseY-20;
            roofSizeX=roofSizeX-45;
            roofSizeY=roofSizeY;
        
    // House 2
        fill(110, 31, 130);
        rect(houseX, houseY, houseSize, houseSize);
        
        // Roof 2
            fill(217, 156, 70);
            rect(roofX, roofY, roofSizeX, roofSizeY);
}
