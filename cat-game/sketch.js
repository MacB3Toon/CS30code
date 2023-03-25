// Trap the cat!
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - Uploaded an image and moved it based on where the user clicked

//define middle
//get cat to move to empty square randomly
//set size of grid to be based on window width and height
//make the cat change img when it moves

const XROWS = 21;
const YCOLS = 35;
let grid;
let cellSize; //size of squares
let cat;
let middle;

function preload(){
  cat = loadImage("cat-head.png");
}

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

  grid = restartGame(XROWS, YCOLS);
}

function draw() {
  background(220);
  displayGame(grid);
}

function keyTyped(){
  if (key === "r"){
    grid = restartGame(XROWS, YCOLS);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);
  moveCat();
}

function moveCat(){

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

function displayGame(grid) {
  imageMode(CENTER);
  image(cat, middle, middle);
  for (let y = 0; y < XROWS; y++) {
    for (let x = 0; x < YCOLS; x++) {
      if (grid[y][x] === 0) {
        fill(153, 255, 153);
      }
      if (grid[y][x] === 1) {
        fill(39, 93, 45);
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
  newGrid = createRandomBricks(XROWS, YCOLS);
  return newGrid;
}

function createRandomBricks(XROWS, YCOLS) {
  let newGrid = [];
  
  for (let y = 0; y < XROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < YCOLS; x++) {
      if (random(100)> 5){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}