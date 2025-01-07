var canvas;

function windowResized () {
 resizeCanvas(windowWidth, windowHeight);
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('position', 'fixed');
canvas.style('z-index', '-10');
// add more here
}
let x = 0;
let y = 0;



function draw() {
   background(0);

  // Scale the mouseX value from 0 to 720 to a range between 0 and 360
  let circleHue = map(mouseX, 0, width, 0, 360);

  // Scale the mouseY value from 0 to 400 to a range between 20 and 300
  let diameter = map(mouseY, 0, height, 20, 300);
 // lerp() calculates a number between two numbers at a specific increment.
  // The amt parameter is the amount to interpolate between the two values
  // where 0.0 is equal to the first point, 0.1 is very near the first point, 0.5
  // is halfway in between, etc.

  // Move 5% of the way to the mouse location each frame
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);
  fill(circleHue, 90, 100);
  ellipse(x, y, 66, 66);
}