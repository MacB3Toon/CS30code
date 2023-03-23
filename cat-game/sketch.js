// Trap the cat!
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const XROWS = 20;
const YCOLS = 35;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = restartGame(XROWS, YCOLS);

  //create biggest grid possible
  if (width < height) {
    cellSize = width/YCOLS;
  }
  else {
    cellSize = height/XROWS;
  }
}

function draw() {
  background(220);
  displayGrid(grid);
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);
}


function toggleCell(x, y) {
  //sanity check
  if (x >= 0 && x < YCOLS && y >= 0 && y < XROWS) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

function displayGrid(grid) {
  for (let y = 0; y < XROWS; y++) {
    for (let x = 0; x < YCOLS; x++) {
      if (grid[y][x] === 0) {
        fill(153, 255, 153);
      }
      if (grid[y][x] === 1) {
        fill(0, 195, 0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function restartGame(XROWS, YCOLS) {
  let newGrid = [];
  for (let y = 0; y < XROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < YCOLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}