// Possible Tron Game
// Macayla Buckmaster
// March 19, 2023

//Extra For Experts
//I spent loads of time unpacking random and trying to figure out millis. 

let x;
let y;
let positionGood = [x, y];
let positionBad = [x, y];
let distanceX;
let distanceY;
let directions;
let setDirection;
let ranNum;
let cycleGood;
let cycleBad;

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeGrid();
  cycleGood = {
    x: windowWidth / 2,
    y: windowHeight / 2 - 100,
    width: 20,
    height: 40,
  };

  cycleBad = {
    x: windowWidth / 2,
    y: windowHeight / 2 + 100,
    width: 20,
    height: 40,
  };

  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  lightcycleGood(cycleGood);
  lightcycleBad(cycleBad);
  //checkDistance();

}

function makeGrid(){
  for (let x1 = 0; x1 < windowWidth; x1 += 40){
    for (let y1 = 0; y1 < windowHeight; y1 += 40){
      stroke(0, 134, 134);
      fill(0);
      rect(x1, y1, 40);
    }
  }
}

//Good lightcycle controlled by user
function lightcycleGood(cycleGood){

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

  rect(cycleGood.x, cycleGood.y, cycleGood.width, cycleGood.height, 10);
}

//Bad lightcycle controlled by computer
function lightcycleBad(cycleBad){

  rectMode(CENTER);
  stroke(255, 155, 75);
  fill(190, 125, 40);

  directions = ["up", "down", "left", "right"];
  setDirection = directions[Math.floor(Math.random() * directions.length)];

  //turning the direction of the orange rect
  ranNum = Math.floor(random() * 10);
  if (ranNum % 3 === 0){
    for (let i = 0; i < ranNum; i++){
      if (setDirection === "up"){
        cycleBad.y -= 5;
        positionBad[1] = y;
        cycleBad.width = 20;
        cycleBad.height = 40;
      }
      if (setDirection === "down"){
        cycleBad.y += 5;
        positionBad[1] = y;
        cycleBad.width = 20;
        cycleBad.height = 40;
      }
      if (setDirection === "left"){
        cycleBad.y -= 5;
        positionBad[0] = x;
        cycleBad.width = 40;
        cycleBad.height = 20;
      }
      if (setDirection === "right"){
        cycleBad.y += 5;
        positionBad[0] = x;
        cycleBad.width = 40;
        cycleBad.height = 20;
      }

      rect(cycleBad.y, cycleBad.y, cycleBad.width, cycleBad.height, 10);
    }
  }
}

//check the distance between the two lightcycles to see if they've crashed
// function checkDistance(){
//   //check x position
//   if (positionGood[0] <= positionBad[0]){
//     distanceX = positionBad[0] - positionGood[0];
//   }
//   else if (positionGood[0] >= positionBad[0]){
//     distanceX = positionGood[0] - positionBad[0];
//   }

//   //check y position
//   if (positionGood[1] <= positionBad[1]){
//     distanceY = positionBad[1] - positionGood[1];
//   }
//   else if (positionGood[1] >= positionBad[1]){
//     distanceY = positionGood[1] - positionBad[1];
//   }

//   //display game over because it crashed
//   if (distanceX <= 20 || distanceY <= 20){
//     fill("red");
//     rect(x, y, windowWidth - windowWidth/4, windowHeight - windowHeight/4);
//     textSize(50);
//     fill("black");
//     text("GAME OVER", x, y);
//   }
// }