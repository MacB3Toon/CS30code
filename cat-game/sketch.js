// Trap the cat!
// Macayla Buckmaster
// 4/15/2023
//
// Extra for Experts:
// - Uploaded an image and moved it based on where the user clicked

const XROWS = 15;
const YCOLS = 29;
let grid;
let cellSize; //size of squares
let cat;
let topLeft = ["down", "right"];
let topRight = ["down", "left"];
let botLeft = ["up", "right"];
let botRight = ["up", "left"];
let directionChoices = ["up", "down", "right", "left"];
let catX;
let catY;
let direction;

function preload(){
  cat = loadImage("cat-head.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loop();

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

  //make spaces around cat empty
  grid[catY - 1][catX] = 0;
  grid[catY - 1][catX - 1] = 0;
  grid[catY - 1][catX + 1] = 0;
  grid[catY][catX - 1] = 0;
  grid[catY][catX + 1] = 0;
  grid[catY + 1][catX] = 0;
  grid[catY + 1][catX - 1] = 0;
  grid[catY + 1][catX + 1] = 0;

  drawCat(catY, catX);
}

function draw() {
  background(220);
  displayGame(grid);
  drawCat(catY, catX);
}

function keyTyped(){
  if (key === "r"){
    loop();
    grid = restartGame(XROWS, YCOLS);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //sets the possible directions for the cat to choose based on where the user clicked
  if (mouseX < width/2 && mouseY < height/2){// top left corner
    direction = random(topLeft);
  }
  else if (mouseX > width/2 && mouseY < height/2){// top right corner
    direction = random(topRight);
  }
  else if (mouseX > width/2 && mouseY > height/2){// bottom right corner
    direction = random(botRight);
  }
  else if (mouseX < width/2 && mouseY > height/2){// bottom leftcorner
    direction = random(botLeft);
  }

  toggleCell(x, y);
  moveCat(direction, catY, catX);
}

function intoWall(direction){
  //if the first direction chosen by cat is filled with a wall, it chooses another direction
  let newDirection = [...directionChoices];
  newDirection -= direction;
  let possibleDirection = random(newDirection);

  //choosing another direction that isn't filled by a wall
  if (possibleDirection === "up"){
    if (grid[catY - 1][catX] === 0){
      moveCat(possibleDirection, catY, catX);
    }
  }
  else if (possibleDirection === "down"){
    if (grid[catY - 1][catX] === 0){
      moveCat(possibleDirection, catY, catX);
    }
  }
  else if (possibleDirection === "left"){
    if (grid[catY - 1][catX] === 0){
      moveCat(possibleDirection, catY, catX);
    }
  }
  else if (possibleDirection === "right"){
    if (grid[catY - 1][catX] === 0){
      moveCat(possibleDirection, catY, catX);
    }
  }
  else{ //if there is nowhere to go
    youWin();
  }
}

function moveCat(direction, catY, catX){ 
  //moves the image of the cat based on where the user clicked
  if (direction === "up"){
    //check if going into wall wall = 1
    if(grid[catY - 1][catX] === 0){
      let tempX = catX;
      let tempY = catY;
      
      catY -= 1;
      
      //update the grid
      grid[catY][catX] = "cat";
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      intoWall(direction);
    }
  }
  else if (direction === "down"){
    //check if going into wall wall = 1
    if(grid[catY + 1][catX] === 0){
      let tempX = catX;
      let tempY = catY;
    
      catY += 1;
    
      //update the grid
      grid[catY][catX] = "cat";
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      intoWall(direction);
    }
  }
  else if (direction === "left"){
    //check if going into wall wall = 1
    if(grid[catY][catX - 1] === 0){
      let tempX = catX;
      let tempY = catY;
    
      catX -= 1;
    
      //update the grid
      grid[catY][catX] = "cat";
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      intoWall(direction);
    }
  }
  else if (direction === "right"){
    //check if going into wall wall = 1
    if(grid[catY][catX + 1] === 0){
      let tempX = catX;
      let tempY = catY;
    
      catX += 1;
    
      //update the grid
      grid[catY][catX] = "cat";
      grid[tempY][tempX] = 0;
    }
    else{//if cat is going to run into a wall
      intoWall(direction);
    }
  }
}

function youWin(){
  //if the cat gets trapped with nowhere left to go
  if(grid[catY - 1][catX] === 1 && grid[catY][catX - 1] === 1 && grid[catY][catX + 1] === 1 &&  grid[catY + 1][catX] === 1){
    noLoop();
    rectMode(CENTER);
    fill(153, 51, 255);
    rect(windowWidth/2, windowHeight/2, 400, 200);
    fill("black");
    textAlign(CENTER);
    textSize(40);
    text("You Win!", windowWidth/2, windowHeight/2 - 50);
    textSize(35);
    text("You Trapped The Cat!", windowWidth/2, windowHeight/2);
    textSize(20);
    text("press R key to restart", windowWidth/2, windowHeight/2 + 50);
  }
}

function drawCat(catY, catX){
  image(cat, catX*cellSize  + cellSize/2, catY*cellSize  + cellSize/2, cellSize - 1, cellSize - 1);
}

function toggleCell(x, y) {
  //makes a floor space into a wall
  if (x >= 0 && x < YCOLS && y >= 0 && y < XROWS) {
    if (grid[y][x] === 0) { 
      grid[y][x] = 1;
    }
  }
}

function displayGame(grid) {
  //creates the grid for the game to be played on 
  imageMode(CENTER);
  rectMode(CORNER);
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
        drawCat(catY, catX);
      }
    }
  }
}

function restartGame(XROWS, YCOLS) {
  //resets the cat in the middle, with random walls on the grid
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
  //makes the random walls appear in the grid
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