// terrain generation with perlin noise
//march 14 2023

let terrain = [];
let xoffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
}

function draw() {
  background(220);
  
  if (keyIsDown(RIGHT_ARROW)){
    xoffset += 5;
  }

  if (keyIsDown(LEFT_ARROW)){
    if (xoffset > 5){
      xoffset -= 5;
    }
  }

  //display rectangles
  for (let i = xoffset; i < xoffset + width; i++){
    rect(terrain[i].x - xoffset, height - terrain[i].height, 1, terrain[i].height);
  }
}

function spawnRectangles(){
  let time = 0;
  for (let x = 0; x<100000; x++){
    let h = noise(time) * height;
    let thisRect = {
      x: x,
      height: h,
    };
    terrain.push(thisRect);
    time += 0.003;
  }
}