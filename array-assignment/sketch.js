// Arrays and object notation assignment
// Macayla Buckmaster
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // drawSquares();
}

function draw() {
  
}

let rectWidth = random(20, 100);
let rectHeight = random(0, 100);
fill(random(0, 255), random(0, 210), 255);

square(x, y, rectWidth, rectHeight);

// function drawSquares(){
//   while (windowWidth >= 0){

//     let rectWidth = random(0, 100);
//     let rectHeight = random(0, 100);
//     fill(random(0, 255), random(0, 210), 255);

//     square(x, y, rectWidth, rectHeight);

//     x += rectWidth;
//     y += rectHeight;
//   }
// }