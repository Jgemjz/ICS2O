/* Side Scroller
2017-07-23
Lucca*/

//Global Variables



function setup() {

	//(1800, 600)
	
	createCanvas(400, 400);
}

function draw() {
	
	//Backgound
	
		background(140, 140, 140);
	
	//Calls
	
		floorPattern();
}

function floorPattern() {
	
	fill(128, 0, 128);
	rect(1, 270, 20, 50);
	
	fill(0, 0, 0);
	rect(1, 280, 40, 40);
}

