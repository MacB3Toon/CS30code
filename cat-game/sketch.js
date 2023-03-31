// Trap the cat!
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - Uploaded an image and moved it based on where the user clicked

//get cat to move to empty square randomly
//set size of grid to be based on window width and height use 12.
//make the cat change img when it moves

const XROWS = 15;
const YCOLS = 29;
let grid;
let cellSize; //size of squares
let cat;
let choosedirection = ["up", "down", "left", "right"];
let catX;
let catY;
let direction;

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
  catX = 14;
  catY = 7;
  grid[catY][catX] = "cat";

  grid[catY - 1][catX] = 0;
  grid[catY - 1][catX - 1] = 0;
  grid[catY - 1][catX + 1] = 0;
  grid[catY][catX - 1] = 0;
  grid[catY][catX + 1] = 0;
  grid[catY + 1][catX] = 0;
  grid[catY + 1][catX - 1] = 0;
  grid[catY + 1][catX + 1] = 0;
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

function moveCat(direction){ //the x and y taken in are the changes being made to where the character is
  if (direction === "up"){
    //check if going into wall wall = 1
    if(grid[catY - cellSize][catX] === 0){
      let tempX = catX;
      let tempY = catY;
      
      catY -= cellSize;
      
      //update the grid
      grid[catY][catX] = 9;
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      let newDirection = [...direction];
      newDirection -= direction;
      moveCat(newDirection);
    }
  }
  else if (direction === "down"){
    //check if going into wall wall = 1
    if(grid[catY + cellSize][catX] === 0){
      let tempX = catX;
      let tempY = catY;
    
      catY += cellSize;
    
      //update the grid
      grid[catY][catX] = 9;
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      let newDirection = [...direction];
      newDirection -= direction;
      moveCat(newDirection);
    }
  }
  else if (direction === "left"){
    //check if going into wall wall = 1
    if(grid[catY][catX - cellSize] === 0){
      let tempX = catX;
      let tempY = catY;
    
      catX -= cellSize;
    
      //update the grid
      grid[catY][catX] = 9;
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      let newDirection = [...direction];
      newDirection -= direction;
      moveCat(newDirection);
    }
  }
  else if (direction === "right"){
    //check if going into wall wall = 1
    if(grid[catY][catX + cellSize] === 0){
      let tempX = catX;
      let tempY = catY;
    
      catX += cellSize;
    
      //update the grid
      grid[catY][catX] = 9;
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      let newDirection = [...direction];
      newDirection -= direction;
      moveCat(newDirection);
    }
  }
}

function drawCat(){
  image(cat, catX*cellSize  + cellSize/2, catY*cellSize  + cellSize/2, cellSize - 1, cellSize - 1);
  direction = random(choosedirection);
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
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (grid[y][x] === 1) {
        fill(39, 93, 45);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (grid[y][x] === "cat"){
        catX = x;
        catY = y;
      }
      
      
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