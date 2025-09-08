function setup() {
  createCanvas(950, 642);
  noStroke();
}

function draw() {
  console. log(mouseX, mouseY);
  background(255, 204, 0);

  color(120,0,0);
  fill(120,0,0);
  rotate(radians(-.5));
  rect(0, 335, 955, 500);
  color(0,0,0);
  fill(0,0,0);
  rect(0, 335, 955, 15);
  rect(0, 430, 955, 15);
  rect(0, 525, 955, 15);

  translate (width/2, height/2);
  rotate (radians(150));
  ellipse(0, 0, 20, 200);

  

 


  resetmatrix();
}
