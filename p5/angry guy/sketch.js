
function setup() {
  	createCanvas(400, 400);
}

function draw() {
    		// head
		fill(240, 200, 130);
		ellipse(205, 56, 80, 96);

		// left eye
		fill(0, 0, 0);
		ellipse(192, 51, 15, 15);

		// right eye
		fill(0, 0, 0);
		ellipse(222, 51, 15, 15);

		// left eyebrow 
		line(203, 44, 179, 35);

		// right eyebrow
		line(211, 43, 236, 35);

		// mouth
		fill(255, 0, 0);
		arc(212, 92, 39, 52, 2.86, 6.04);
		line(193, 99, 232, 84);

		// upper chest
		fill(255, 0, 0);
		rect(83, 103, 241, 37);

		// waist
		fill(155, 159, 235);
		rect(150, 103, 107, 131);

		// left leg
		fill(240, 200, 130);
		rect(150, 234, 39, 111);

		// right leg
		rect(218, 234, 39, 111);

}
