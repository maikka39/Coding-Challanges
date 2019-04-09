// Algorithm by: hugo.elias
// https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm

let damping;

let current = [];
let previous = [];

let c;

function setup() {
  // put setup code here
  createCanvas(600, 600);

  for (let x = 0; x < width; x++) {
    current.push(0);
    current[x] = []
    for (let y = 0; y < height; y++) {
      current[x].push(0);
    }
  }
  for (let x = 0; x < width; x++) {
    previous.push(0);
    previous[x] = []
    for (let y = 0; y < height; y++) {
      previous[x].push(0);
    }
  }

  damping = .99;
}

function draw() {
  // put drawing code here
  background(0);
  for (let x = 1; x < width - 1; x++) {
    for (let y = 1; y < height - 1; y++) {
      current[x][y] = (
          previous[x - 1][y] +
          previous[x + 1][y] +
          previous[x][y - 1] +
          previous[x][y + 1]) / 2 -
        current[x][y];
      current[x][y] = current[x][y] * damping;
      set(x, y, color(current[x][y]))
    }
  }

  updatePixels();


  [previous, current] = [current, previous];
}

function mouseClicked() {
  previous[mouseX][mouseY] = 800;
  return false;
}

function mouseDragged() {
  previous[mouseX][mouseY] = 800;
  return false;
}
