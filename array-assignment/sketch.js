// Arrays and object notation assignment
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeGrid();
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
  let x = windowWidth/2;
  let y = windowHeight/2;
  rectMode(CENTER);
  stroke(131, 210, 255);
  fill(68, 177, 240);
  rect(x, y - 100, 20, 40, 10);
 for (let i = 1; i < 0; i++){
   if (keyIsDown(UP_ARROW)){
    y += 5;
   }
   else if (keyIsDown(RIGHT_ARROW)){
//   //     x += 5;
//   //   }
//   //   else if (keyIsDown(LEFT_ARROW)){
//   //     x -= 5; 
//   //   }
//   //   else if (keyIsDown(DOWN_ARROW)){
//   //     y -= 5; 
//   //   }
//   // }
// }


//Bad lightcycle controlled by computer
function lightcycleBad(){
  let x = windowWidth/2;
  let y = windowHeight/2;
  rectMode(CENTER);
  stroke(255, 155, 75);
  fill(190, 125, 40);
  rect(x, y + 100, 20, 40, 10);
}
