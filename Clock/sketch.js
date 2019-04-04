let size;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(40);

  size = 0.8 * Math.min(width, height);
}

function draw() {
  // put drawing code here
  background(40);
  translate(width / 2, height / 2);
  rotate(-90);

  strokeWeight(8);

  let hr = hour();
  let mn = minute();
  let sc = second();

  let secondAngle = map(sc, 0, 60, 0, 360);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);

  noFill();
  stroke(255);
  arc(0, 0, size, size, 0, secondAngle);
  arc(0, 0, 0.9 * size, 0.9 * size, 0, minuteAngle);
  arc(0, 0, 0.8 * size, 0.8 * size, 0, hourAngle);

  push()
  stroke(255);
  rotate(secondAngle);
  line(0, 0, 0.5 * size / 2, 0);
  pop()

  push()
  rotate(minuteAngle);
  stroke(255);
  line(0, 0, 0.4 * size / 2, 0);
  pop()

  push()
  rotate(hourAngle);
  stroke(255);
  line(0, 0, 0.3 * size / 2, 0);
  pop()
}
