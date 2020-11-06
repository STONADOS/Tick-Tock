var hr, min, sec;


function setup() {
  createCanvas(1750,850);
  // createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(0,0,0);  
  textSize(40);
  fill("gold");
  text(hr + " : " + min + " : " + sec, 730, 200);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 60, 0, 360);

  stroke("blue");
  strokeWeight(14);
  fill("black");
  ellipse(825, 425, 350, 350);

  stroke("red");
  strokeWeight(10);
  fill("black");
  ellipse(825, 425, 350, 350);

  stroke("green");
  strokeWeight(3);
  fill("black");
  ellipse(825, 425, 350, 350);

  translate(825, 425);
  rotate(-90);
  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 120, 0);
  pop();


  translate(0, 0);
  rotate(0);
  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 120, 0);
  pop();


  translate(0, 0);
  rotate(-90);
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 120, 0);
  pop();

  drawSprites();

}