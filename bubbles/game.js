var bubbles = [];
function bubble(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.size = speed * 5;
  this.move = function() {
    this.y += this.speed;
  }
  this.display = function() {
    fill(generateColor());
    circle(this.x, windowHeight - this.y, this.size);
  }
}

function generateColor() {
  red = 0;
  green = 0;
  blue = 0;
  while ((red - 20 < green || red + 20 > green) && (green - 20 < blue || green + 20 > blue) && (red - 20 < blue || red + 20 > blue)) {
    red = random(255);
    green = random(255);
    blue = random(255);
    return (red, green, blue);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  for (i = 0; i < 4; i++) {
    bubbles.push(new bubble(random(0, windowWidth), -100, random(2, 8)));
  }

  background(220, 220, 220);
  for (i = 0; i < bubbles.length; i++) {
    if (bubbles[i].y + bubbles[i].size > windowHeight + 100) {
      bubbles.splice(i, 1);
    }
    bubbles[i].move();
    bubbles[i].display();
  }
}
