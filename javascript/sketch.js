let dots = [];
let isHover = false;

class Particle {
    constructor (x, y, opacity) {
      this.x = x;
      this.y = y;
      this.opacity = 100;
    }
}

// ****************** ISSUE! ******************
//I am trying to trigger the "drawing function" through a boolean (isHover) which is controlled by an if statement located in the draw() function.

//No console errors, so I must be using the wrong syntax

//References I viewed:
//  https://api.jquery.com/mouseenter/
//  https://api.jquery.com/hover/#hover1

$('.p5canvas').mouseenter(function (){
  isHover = true;
  console.log("triggered");
}).mouseleave( function () {
  isHover = false;
});

// $('.p5canvas').hover(function (){
//   isHover = true;
//   console.log("triggered");
// });

function setup() {
    noStroke();
    let c;
    c = random (0, 360);
    let rColor = Math.round(c).toString();
    console.log(rColor);
    //fill('hsba' + '(' + rColor + ', 100%, 90%, 0.8)');
    //fill('hsba(160, 100%, 90%, 0.8)');
    fill(255, 31, 94, 70);
}

function draw() {
    //For Website Config
    let width = window.innerWidth;
    createCanvas(width, 500);
    background(35);

    //For Drawing Config
  //if (isHover == true){
    let p = new Particle (mouseX, mouseY);
    dots.push(p);
    
    for (let i = 0; i < dots.length; i++) {
      circle (dots[i].x, dots[i].y, 15);
    }
    
    dots[0].opacity -= 50;
    
    if (dots[0].opacity <= 0) {
      dots.shift();    
    }
  //}
}
