let dots = [];
let isHover = false;

class Particle {
    constructor (x, y, opacity) {
      this.x = x;
      this.y = y;
      this.opacity = 100;
    }
}

// function init(){
//     let drawing = document.getElementById('defaultCanvas0');
// }

// if (drawing != null) {
//     drawing.addEventListener("mouseover", Hovering, {passive: true});
// }

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
    let width = window.innerWidth
    createCanvas(width, 550);
    background(35);

    //For Drawing Config
    //if (Hovering === true){
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

//window.onload = function() {init();};