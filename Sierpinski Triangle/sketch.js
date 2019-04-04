let size;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(40);
  frameRate(1);

  size = 0.8 * Math.min(width, height)

}

function draw() {
  // put drawing code here
  background(40);
  fill(255);
  noStroke();
  // stroke(40);
  strokeWeight(4);
  divide(width / 2 - size / 2, height / 2 + sin(PI / 3) * size / 2, size, 1, frameCount);
}

function divide(x, y, s, lvl, max) {
  if (lvl === max || lvl >= 8) {
    tri(x, y, s);
  } else {
    divide(x, y, s / 2, lvl + 1, max);
    divide(x + s / 2, y, s / 2, lvl + 1, max);
    divide(x + s / 4, y - sin(PI / 3) * s / 2, s / 2, lvl + 1, max);
  }
}

function tri(x, y, s) {
  triangle(x, y, x + s / 2, y - sin(PI / 3) * s, x + s, y);
}
