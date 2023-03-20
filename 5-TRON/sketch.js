// Possible Tron Game
// Macayla Buckmaster
// March 19, 2023

let x;
let y;
let positionGood = [x, y];
let positionBad = [x, y];
let direction;
let distanceX;
let distanceY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeGrid();
  
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  makeGrid();
  lightcycleGood();
  lightcycleBad();
  checkDistance();
}

function makeGrid(){
  for (let x = 0; x < windowWidth; x += 40){
    for (let y = 0; y < windowHeight; y += 40){
      stroke(0, 134, 134);
      fill(0);
      rect(x, y, 40);
    }
  }
}

//Good lightcycle controlled by user
function lightcycleGood(){

  let cycleGood = {
    x: windowWidth * 2,
    y: windowHeight * 2 - 100,
    width: 20,
    height: 40,
  };
  
  rectMode(CENTER);
  stroke(131, 210, 255);
  fill(68, 177, 240);

  if (keyIsDown(UP_ARROW)){
    cycleGood.y -= 5;
    positionGood[1] = y;
    cycleGood.width = 20;
    cycleGood.height = 40;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    cycleGood.x += 5;
    positionGood[0] = x;
    cycleGood.width = 40;
    cycleGood.height = 20;
  }
  else if (keyIsDown(LEFT_ARROW)){
    cycleGood.x -= 5;
    positionGood[0] = x;
    cycleGood.width = 40;
    cycleGood.height = 20;
  }
  else if (keyIsDown(DOWN_ARROW)){
    cycleGood.y += 5; 
    positionGood[1] = y;
    cycleGood.width = 20;
    cycleGood.height = 40;
  }
  rect(x, y - 100, cycleGood.width, cycleGood.height, 10);
  //rect(cycleGood.x, cycleGood.y, cycleGood.width, cycleGood.height, 10);
}

//Bad lightcycle controlled by computer
function lightcycleBad(){

  let cycleBad = {
    x: windowWidth * 2,
    y: windowHeight * 2 + 100,
    width: 20,
    height: 40,
  };

  rectMode(CENTER);
  stroke(255, 155, 75);
  fill(190, 125, 40);

  //randomizing the direction of the orange rect
  for (let i = 0; i < windowWidth; i++){
    if(millis() % 2000 === 0){
      if (i % 2 === 0){
        direction = "up";
      }
      else if (i % 2 !== 0){
        direction = "down";
      }
      else if (i % 3 === 0){
        direction = "left";
      }
      else if (i % 3 !== 0){
        direction = "right";
      }
    }
    return direction;
  }

  //turning the direction of the orange rect
  if (direction === "up"){
    y -= 5;
    positionBad[1] = y;
    cycleBad.width = 20;
    cycleBad.height = 40;
  }
  if (direction === "down"){
    y += 5;
    positionBad[1] = y;
    cycleBad.width = 20;
    cycleBad.height = 40;
  }
  if (direction === "left"){
    x -= 5;
    positionBad[0] = x;
    cycleBad.width = 40;
    cycleBad.height = 20;
  }
  if (direction === "right"){
    x += 5;
    positionBad[0] = x;
    cycleBad.width = 40;
    cycleBad.height = 20;
  }

  rect(x, y + 100, cycleBad.width, cycleBad.height, 10);
  //rect(cycleBad.x, cycleBad.y, cycleBad.width, cycleBad.height, 10);
}

//check the distance between the two lightcycles to see if they've crashed
function checkDistance(){
  if (positionGood[0] <= positionBad[0]){
    distanceX = positionBad[0] - positionGood[0];
  }
  else if (positionGood[0] >= positionBad[0]){
    distanceX = positionGood[0] - positionBad[0];
  }

  if (positionGood[1] <= positionBad[1]){
    distanceY = positionBad[1] - positionGood[1];
  }
  else if (positionGood[1] >= positionBad[1]){
    distanceY = positionGood[1] - positionBad[1];
  }

  if (distanceX <= 20 || distanceY <= 20){
    fill("red");
    rect(x, y, windowWidth - windowWidth/4, windowHeight - windowHeight/4);
    textSize(50);
    text("GAME OVER", x, y);
  }
}