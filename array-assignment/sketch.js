// Arrays and object notation assignment
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let rectWidth;
let rectHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  drawSquares();
}

function draw() {
  
}

function drawSquares(){
  for (let i = 0; i < windowWidth; i++){

    rectWidth = random(50, 150);
    rectHeight = random(50, 150);
    fill(random(170, 255), random(0, 170), 255);
    rect(x, y, rectWidth, rectHeight);
  
    x += rectWidth;
  }
}