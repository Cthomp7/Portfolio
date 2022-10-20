let dots = [];
let isHover = false;
let width;

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
  let rColor = Math.round(c).toString();
  fill('hsba(' + rColor + ', 100%, 90%, 0.8)');
  fill(255, 31, 94, 70);

  width = window.innerWidth;
  createCanvas(width, 500);
}

$('#intro').mouseenter(function() { isHover = true;
});

$('#intro').mouseleave(function() { isHover = false;
});

function draw() {
  width = window.innerWidth;
  createCanvas(width, 500);
    //For Website Config
    background(35);
    //For Drawing Config
  if (isHover == true){
    let p = new Particle (mouseX, mouseY);
    dots.push(p);
  }

  for (let i = 0; i < dots.length; i++) {
    circle (dots[i].x, dots[i].y, 15);
  }

  if (dots.length > 0) {
    dots[0].life -= 80;

    if (dots[0].life <= 0) {
      dots.shift();
    }
  }
}
