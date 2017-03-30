
/*Clown I Made 
Lucca 
2017-03-30*/

// variables
    var headsize=70;
    var eyesize=15;
    var nosesize3=15;
    var buttonsize=15;
    var legwidth=30;
    var legheight=73;
    var armwidth=243;
    var armheight=21;
    var handsize=30;
    var shoewidth=77;
    var shoeheight=32;

function setup() {
  createCanvas(640, 480);
}

function draw() {
 noStroke();

// legs
    fill(141, 143, 132);
    rect(217, 248, legwidth, legheight);
    rect(157, 248, legwidth, legheight);

// shoes
    fill(122, 99, 255);
    ellipse(247, 317, shoewidth, shoeheight);
    ellipse(160, 317, shoewidth, shoeheight);
    
// arms
    fill(141, 143, 132);
    rect(81, 145, armwidth, armheight);

// hands
    fill(242, 217, 175);
    ellipse(318, 155, handsize, handsize);
    ellipse(90, 155, handsize, handsize);

// body
    fill(235, 127, 127);
    ellipse(200, 196, 140, 150);

// buttons
    fill(0, 0, 0);
    ellipse(200, 158, buttonsize, buttonsize);
    ellipse(200, 187, buttonsize, buttonsize);
    ellipse(200, 215, buttonsize, buttonsize);

// hair
    fill(77, 65, 56);
    ellipse(200, 64, 134, 99);

// head
    fill(242, 217, 175);
    ellipse(200, 100, headsize, headsize);

// eyes
    fill(126, 128, 115);
    ellipse(213, 90, eyesize, eyesize);
    ellipse(185, 90, eyesize, eyesize);

// nose
    fill(255, 3, 3);
    ellipse(200, 105, nosesize3, nosesize3);

// mouth
    fill(58, 222, 17);
    rect(182, 117, 38, 7);


  
  
}