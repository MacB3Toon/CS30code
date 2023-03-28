// Trap the cat!
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - Uploaded an image and moved it based on where the user clicked

//get cat to move to empty square randomly
//set size of grid to be based on window width and height use performer 11?
//make the cat change img when it moves
//add texturess use 10
//wherever the cat is in the moment is basically just displaying one cell DO THIS FIRST USE 10 AS DEMO IT SHOULD WORK
//when mouse interaction remember to make x over a bit because the grid is over a bit

const XROWS = 15;
const YCOLS = 29;
let grid;
let cellSize; //size of squares
let cat;
let direction = ["up", "down", "left", "right"];
let catStartX;
let catStartY;

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
  catStartX = cellSize*14;
  catStartY = cellSize*7.5;

  // grid[catStartY - 1][catStartX] = 0;
  // grid[catStartY - 1][catStartX - 1] = 0;
  // grid[catStartY - 1][catStartX + 1] = 0;
  // grid[catStartY][catStartX - 1] = 0;
  // grid[catStartY][catStartX + 1] = 0;
  // grid[catStartY + 1][catStartX] = 0;
  // grid[catStartY + 1][catStartX - 1] = 0;
  // grid[catStartY + 1][catStartX + 1] = 0;
  drawCat();
}

function draw() {
  background(220);
  displayGame(grid);
  drawCat();
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
  random(direction);
}

function drawCat(){
  let catStartX = cellSize*14;
  let catStartY = cellSize*7.5;
  image(cat, catStartX, catStartY, cellSize, cellSize);

}

function toggleCell(x, y) {
  //0 = floor, 1 = wall. 
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
  for (let y = 0; y < XROWS; y++) {
    for (let x = 0; x < YCOLS; x++) {
      if (grid[y][x] === 0) {
        fill(153, 255, 153);
      }
      if (grid[y][x] === 1) {
        fill(39, 93, 45);
      }
      
      rect(x*cellSize + cellSize/2, y*cellSize, cellSize, cellSize);
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