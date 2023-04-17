// OOP walker demo

class Walker{
  //data
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255), random(255));
    this.speed = 5;
    this.size = 5;
  }

  //behaviour
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  //behaviour
  move(){
    let choice = random(100);
    if (choice < 25){
      //up
      this.y -= this.speed;
    }
    else if (choice < 50){
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //left
      this.x -= this.speed;
    }
    else if (choice < 100){
      //right
      this.x += this.speed;
    }
  }
}

// let kevin;
// let wasi;
let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let kevin = new Walker(width/2, height/2);
  walkerArray.push(kevin);
}

function draw() {
  for (let i = 0; i < walkerArray.length; i++){
    walkerArray[i].move();
    walkerArray[i].display();
  }
}

function mousePressed(){
  let someWalker = new Walker(mouseX, mouseY);
  walkerArray.push(someWalker);
}