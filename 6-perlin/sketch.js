// Perlin demo with bubbles

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBubble();
  noStroke();
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background("white");

  //javascript convenice for loop:
  for (const bubble of theBubbles) {
    //move
    bubble.x = noise(bubble.time) * width;
    bubble.y = noise(bubble.time + 300) * height;

    //display
    fill(bubble.color);
    circle(bubble.x, bubble.y, bubble.size);

    //update time
    bubble.time += 0.01;
  }


}

function spawnBubble(){
  let bubble = {
    x: random(width),
    y: random(height),
    size: random(5, 50),
    color: color(random(255), random(255),random(255),random(255)),
    time: random(10000),
  };
  theBubbles.push(bubble);
}