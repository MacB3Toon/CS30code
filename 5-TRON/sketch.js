// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;

let cycleGood = {
  x: windowWidth * 2,
  y: windowHeight * 2 - 100,
  width: 20,
  height: 40,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeGrid();
  
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  lightcycleGood();
  lightcycleBad();
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
  
  rectMode(CENTER);
  stroke(131, 210, 255);
  fill(68, 177, 240);

  if (keyIsDown(UP_ARROW)){
    y -= 5;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  else if (keyIsDown(LEFT_ARROW)){
    x -= 5; 
  }
  else if (keyIsDown(DOWN_ARROW)){
    y += 5; 
  }
  rect(x, y - 100, 20, 40, 10);
  
}


//Bad lightcycle controlled by computer
function lightcycleBad(){

  rectMode(CENTER);
  stroke(255, 155, 75);
  fill(190, 125, 40);
  rect(x, y + 100, 20, 40, 10);
}
