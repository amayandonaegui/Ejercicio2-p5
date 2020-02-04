let x = 300;
let y = 300;
let d = 100;

let label = "modorros"


function setup() {
  createCanvas(600, 600);
}

function draw() {
  //background(220);
  noStroke();
  fill(random(100, 255), random(0, 100), random(100, 255));
  ellipse(x, y, d, d);
  
  fill(220);
  textAlign(CENTER);
  text(label, x, y);
  
  x = random(0, width);
  y = random(0, height);
 d = dist(width/2, height/2, mouseX, mouseY);
 }
