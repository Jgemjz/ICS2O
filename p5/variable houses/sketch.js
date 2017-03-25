
 /*houses with variables
2017-03-23
Lucca*/

// variables
    var baseX=52;
    var baseY=236;
    var houseSize=130;
    // roof variables
        var tri1X=24;
        var tri1Y=254;
        var tri2X=214;
        var tri2Y=254;
        var tri3X=120;
        var tri3Y=138;

function setup() {
  createCanvas(400, 400);
}

function draw() {
 
noStroke();

background(112, 162, 237);

// grass
    fill(38, 138, 40);
    ellipse(200, 373, 568, 100);

// house1 base
    fill(122, 50, 50);
    rect(baseX, baseY, houseSize, houseSize);

// house1 roof
    fill(227, 122, 9);
    triangle(tri1X, tri1Y, tri2X, tri2Y, tri3X, tri3Y);

	baseX=naseX+160;
	baseY=baseY+186;
	houseSize=houseSize-50;
	tri1X=tri1X+210
	tri1Y=tri1Y+40
	tri2X=tri2X+150
	tri2Y=tri2Y+40
	tri3X=tri3X+180
	tri3Y=tri3Y+83
	
// house2 base
    fill(122, 50, 50);
    rect(baseX, baseY, houseSize, houseSize);

// house2 roof
    fill(227, 122, 9);
    triangle(tri1X, tri1Y, tri2X, tri2Y, tri3X, tri3Y);
    
// sun
    fill(240, 240, 104);
    ellipse(275, 73, 64, 64);
	
}
