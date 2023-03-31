// Trap the cat!
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - Uploaded an image and moved it based on where the user clicked

//get cat to move to empty square randomly
//set size of grid to be based on window width and height use 12.
//make the cat change img when it moves
//add texturess use 10
//replace all cat start x and y to just catX cat Y
//WHERE DID X AND Y COME FROM TO CHECK WHERE WALL IS LOOK AT TEN WHY DOES MOVECHARACTER TAKE IN X AND WHY FROM WHERE

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

  //the cat
  catStartX = 14;
  catStartY = 7;
  grid[catStartY][catStartX] = "cat";

  grid[catStartY - 1][catStartX] = 0;
  grid[catStartY - 1][catStartX - 1] = 0;
  grid[catStartY - 1][catStartX + 1] = 0;
  grid[catStartY][catStartX - 1] = 0;
  grid[catStartY][catStartX + 1] = 0;
  grid[catStartY + 1][catStartX] = 0;
  grid[catStartY + 1][catStartX - 1] = 0;
  grid[catStartY + 1][catStartX + 1] = 0;
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

function moveCat(direction){
  if (direction === "up"){
    //check if going into wall wall = 1
    if(grid[catY + y][catX + x] === 0){
      let tempX = catX;
      let tempY = catY;

      catX += x;
      catY += y;

      //update the grid
      grid[catY][catX] = 9;
      grid[tempY][tempX] = 0;
    }
  }
  else if (direction === "down"){
    
  }
  else if (direction === "left"){
    
  }
  else if (direction === "right"){
    
  }
}

function drawCat(){
  image(cat, catStartX*cellSize  + cellSize/2, catStartY*cellSize  + cellSize/2, cellSize - 4.6, cellSize - 4.6);
  direction = random(direction);
  return direction;
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
      if (grid[y][x] === "cat"){
        catStartX = x;
        catStartY = y;
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