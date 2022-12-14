let dots = [];
let isHover = false;
let width, height = 500;
let rColor;

$('#intro').mouseenter(function() { isHover = true; });
$('#intro').mouseleave(function() { isHover = false; });
$('#intro').mousemove(function() { isMoving = true; });

class Particle {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.life = 100;

    this.dying = function(){
    }
  }
}
console.log($('.p5Canvas'));

function setup() {
  noStroke();
  let c;
  c = random(0, 360);
  rColor = Math.round(c).toString();
  width = window.innerWidth;
  createCanvas(width, 500);
  fill('hsba(' + rColor + ', 100%, 90%, 0.8)');
}

function draw() {
  width = window.innerWidth;
  createCanvas(width, height);
  background(35);
  fill('hsba(' + rColor + ', 100%, 90%, 0.8)');

  if (isHover == true && isMoving == true) {
      let p = new Particle (mouseX, mouseY);
      dots.push(p);
      isMoving = false;
  }

  for (let i = 0; i < dots.length; i++) {
    circle (dots[i].x, dots[i].y, 15);
  }

  if (dots.length > 0) {
    dots[0].life -= 50;

    if (dots[0].life <= 0) {
      dots.shift();
    }
  }
}

$(window).resize(function() {
  if ($(window).width() <= 500) {
    height = 280;
  } else if ($(window).width() <= 600) {
    height = 300;
  } else if ($(window).width() <= 700) {
    height = 400;
  } else {
    height = 500;
  }
});
