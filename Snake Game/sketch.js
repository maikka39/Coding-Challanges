let matrix = [];
let snake;

let stillFood;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(40);
  frameRate(8);

  // matrix = Array(width / 10).fill(Array(height / 10).fill(0));
  for (let x = 0; x < width / 10; x++) {
    matrix.push(0);
    matrix[x] = []
    for (let y = 0; y < height / 10; y++) {
      matrix[x].push(0);
    }
  }

  snake = new Snake(matrix);

  generateFood();

}

function draw() {
  // put drawing code here
  noStroke();
  scale(10);

  snake.move();

  stillFood = false;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === 1) {
        fill(255);
      } else if (matrix[x][y] === 2) {
        stillFood = true;
        fill(150);
      } else {
        fill(40);
      }
      rect(x, y, 1, 1);
    }
  }

  if (!stillFood) {
    generateFood();
  }

}



function generateFood() {
  matrix[floor(random(matrix.length))][floor(random(matrix[0].length))] = 2;
}



function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    if (snake.direction !== 3 && snake.hasMoved) {
      snake.direction = 1;
      snake.hasMoved = false;
    }
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    if (snake.direction !== 4 && snake.hasMoved) {
      snake.direction = 2;
      snake.hasMoved = false;
    }
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    if (snake.direction !== 1 && snake.hasMoved) {
      snake.direction = 3;
      snake.hasMoved = false;
    }
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    if (snake.direction !== 2 && snake.hasMoved) {
      snake.direction = 4;
      snake.hasMoved = false;
    }
  } else if (keyCode === 32) {
    snake.grow();
  }
}
