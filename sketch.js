function setup() {
  createCanvas(950, 642);
  noStroke();
}

function draw() {
  //Yellow bg
  console. log(mouseX, mouseY);
  background(255, 204, 0);

  //black spots
  fill(0, 0, 0);
  ellipse(350, 360, 250, 320);
  ellipse(300, 240, 150, 220);
  ellipse(230, 320, 300, 230);
  ellipse(180, 300, 400, 20);
  ellipse(180, 320, 400, 20);
  ellipse(180, 340, 400, 20);
  ellipse(200, 280, 400, 15);
  ellipse(200, 260, 400, 15);
  ellipse(200, 240, 400, 15);
  ellipse(200, 220, 400, 15);
  ellipse(200, 200, 400, 15);
  translate (width/2, height/2);
  ellipse(0, 0, 20, 200);
  ellipse(-15, -20, 20, 200);
  ellipse(-35, -60, 20, 200);
  ellipse(-60, -60, 25, 250);
  ellipse(-80, -80, 20, 200);
  rotate (radians(-10));
  ellipse(-70, -140, 20, 200);
  ellipse(-50, -100, 20, 200);
  ellipse(-90, -180, 20, 200);
  ellipse(-110, -200, 15, 300);
  ellipse(-130, -210, 15, 300);
  ellipse(-150, -240, 15, 300);
  ellipse(-170, -260, 15, 300);
  ellipse(-190, -280, 15, 300);

  ellipse(385, -120, 15, 200);
  ellipse(395, -120, 15, 200);
  ellipse(405, -130, 15, 180);
  ellipse(415, -150, 15, 140);
  ellipse(425, -170, 15, 100);
  
  rotate (radians(-25));
  ellipse(-80, -230, 20, 350);
  ellipse(-60, -260, 20, 350);
  ellipse(-100, -210, 20, 350);
  ellipse(-120, -200, 20, 350);
  ellipse(-140, -210, 20, 350);
  ellipse(-160, -220, 20, 350);
  ellipse(-180, -230, 20, 350);
  ellipse(-200, -240, 20, 350);
  ellipse(-220, -250, 20, 350);
  ellipse(-240, -220, 20, 350);
  ellipse(-260, -200, 20, 350);
    ellipse(-280, -180, 20, 350);
  ellipse(-300, -160, 20, 350);
  ellipse(-320, -140, 20, 350);
    ellipse(-340, -120, 20, 350);
  ellipse(-360, -100, 20, 350);
  ellipse(-380, -80, 20, 350);
  ellipse(0, 0, 20, 200);
  ellipse(50, 100, 20, 200);
  ellipse(70, 120, 20, 200);
  ellipse(90, 140, 20, 200);
  ellipse(110, 160, 20, 200);
  ellipse(220, 60, 15, 30);
  ellipse(235, 70, 15, 60);
  ellipse(250, 80, 15, 120);
  ellipse(265, 100, 15, 140);
  ellipse(280, 110, 15, 150);
  ellipse(295, 130, 15, 200);
  ellipse(310, 140, 15, 220);
  ellipse(325, 100, 15, 140);

  //Dork spots but not the big one
  ellipse(200, -100, 15, 200);
  ellipse(220, -120, 15, 200);
  ellipse(240, -140, 15, 200);
  ellipse(260, -160, 15, 200);
  ellipse(200, -180, 15, 200);
  ellipse(200, -200, 15, 200);
  ellipse(220, -220, 15, 200);
  ellipse(230, -200, 55, 200);
  ellipse(240, -240, 15, 200);
  ellipse(260, -260, 15, 200);
  
  ellipse(340, -180, 15, 200);
  ellipse(355, -100, 15, 200);
  ellipse(370, -100, 15, 200);
  ellipse(385, -120, 15, 200);


  //red speed lines
  rotate (radians(25));
  rotate (radians(10));
  translate (-width/2, -height/2);

  color(120,0,0);
  fill(120,0,0);
  rotate(radians(-.5));
  rect(0, 335, 955, 550);
  color(0,0,0);
  fill(0,0,0);
  rect(0, 335, 955, 15);
  rect(0, 430, 955, 15);
  rect(0, 525, 955, 15);



  resetmatrix();
}
