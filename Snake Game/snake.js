function Snake(matrix) {
  this.startX = matrix.length / 2;
  this.startY = matrix[0].length / 2;

  this.hasMoved = false;

  /*
   1 -> left
   2 -> up
   3 -> right
   4 -> down
  */
  this.direction = 1;

  this.snake = [
    [this.startX, this.startY],
    [this.startX + 1, this.startY]
  ]

  this.move = function () {
    switch (this.direction) {
    case 1:
      this.snake.unshift([this.snake[0][0] - 1, this.snake[0][1]]);
      break;
    case 2:
      this.snake.unshift([this.snake[0][0], this.snake[0][1] - 1]);
      break;
    case 3:
      this.snake.unshift([this.snake[0][0] + 1, this.snake[0][1]]);
      break;
    case 4:
      this.snake.unshift([this.snake[0][0], this.snake[0][1] + 1]);
      break;
    }

    // for (let i = 1; i < this.snake.length; i++) {}

    matrix[this.snake[this.snake.length - 1][0]][this.snake[this.snake.length - 1][1]] = 0;
    this.snake.pop()

    if (this.isDead()) {
      this.die();
    }

    if (matrix[this.snake[0][0]][this.snake[0][1]] === 2) {
      this.grow();
    }

    for (let i = 0; i < this.snake.length; i++) {
      matrix[this.snake[i][0]][this.snake[i][1]] = 1;
    }

    this.hasMoved = true;
  }

  this.grow = function () {
    this.snake.push([this.snake[this.snake.length - 1][0], this.snake[this.snake.length - 1][1]])
  }

  this.die = function () {
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        matrix[x][y] = 0;
      }
    }

    this.snake = [
      [this.startX, this.startY],
      [this.startX + 1, this.startY]
    ]
  }

  this.isDead = function () {
    let counts = [];
    for (let i = 0; i <= this.snake.length; i++) {
      if (counts[this.snake[i]] === undefined) {
        counts[this.snake[i]] = 1;
      } else {
        return true;
      }
    }

    for (var i = 0; i < this.snake.length; i++) {
      if (this.snake[0][0] > matrix.length - 1 ||
        this.snake[0][0] < 0 ||
        this.snake[0][1] > matrix[0].length - 1 ||
        this.snake[0][1] < 0) {
        return true;
      }
    }

    return false;
  }
}
