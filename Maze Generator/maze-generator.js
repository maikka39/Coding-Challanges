function Maze(mwidth, mheight) {
  this.width = mwidth;
  this.height = mheight;

  this.init = function () {
    this.x = this.width / 4
    this.y = this.height / 4

    this.completed = false;
    this.map = [];

    for (var x = 0; x < this.width; x++) {
      this.map[x] = [];
      for (var y = 0; y < this.height; y++) {
        this.map[x][y] = false;
      }
    }

    this.route = [
      [this.y, this.x]
    ]
  }

  this.loop = function () {
    if (this.route[this.route.length - 1] === undefined) {
      this.completed = true;
      return;
    }

    this.y = this.route[this.route.length - 1][0] | 0;
    this.x = this.route[this.route.length - 1][1] | 0;

    this.directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];

    this.alternatives = [];

    for (var i = 0; i < this.directions.length; i++) {
      if (this.map[(this.directions[i][1] + this.x) * 2] != undefined &&
        this.map[(this.directions[i][1] + this.x) * 2][(this.directions[i][0] + this.y) * 2] === false) {
        this.alternatives.push(this.directions[i]);
      }
    }

    if (this.alternatives.length === 0) {
      this.route.pop()
      return;
    }

    this.direction = this.alternatives[random() * this.alternatives.length | 0]
    this.route.push([this.direction[0] + this.y, this.direction[1] + this.x])
    this.map[(this.direction[1] + this.x) * 2][(this.direction[0] + this.y) * 2] = true
    this.map[this.direction[1] + this.x * 2][this.direction[0] + this.y * 2] = true
  }

  this.complete = function () {
    while (!this.completed) {
      this.loop();
    }
  }
}
