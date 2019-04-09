let maze;

let w = 60;
let h = 60;
let mazeScale = 10;


function setup() {
  createCanvas(w * mazeScale - mazeScale, h * mazeScale - mazeScale); // Create our canvas
  maze = new Maze(w - 2, h - 2); // Make a maze object
  maze.init(); // Initialize the maze
}

function draw() {
  background(40);
  fill(255);
  noStroke();

  // maze.complete(); // For instant maze

  if (!maze.completed) {
    maze.loop(); // For animated
  }

  for (var x = 0; x < maze.map.length; x++) {
    for (var y = 0; y < maze.map[x].length; y++) {
      if (maze.map[x][y]) {
        rect(x * mazeScale + mazeScale, y * mazeScale + mazeScale, mazeScale, mazeScale);
      }
    }
  }
}
