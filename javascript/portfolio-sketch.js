let resolution = 30;
let w;
let c;
let n;

let sinOut = 0;
let cNoise = 0;

let c2;
let c3;

function setup() {
  w = 750 / resolution;
  noStroke();
  
  c2 = color (255);
  c3 = color (255, 0);
}

function draw() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    createCanvas(width, 750);
    w = width / resolution;
  
    let sinVal = 0.0;
    let sinInc = TWO_PI / 25.0;
    
    for (let x = 0; x < resolution; x++) {
        for (let y = 0; y < resolution; y++) {
        
        sinOut += sin(sinVal);
        cNoise = noise(sinOut) * 10;
        
        if (cNoise <= 3.5) {
            c = color (randomColor(), randomColor(), randomColor());
        } else if (cNoise > 3.5 && cNoise <= 5.3) {
            c = color(c2);
        } else {
            c = color(c3);
        }
        
        fill(c);
        square (x * w, y * w, w);
        
        sinVal = sinVal + sinInc;
        }
    }
    noLoop();
}

// $(window).resize(function() {
//     draw();
// });

function randomColor() {
    cR = random(0, 255);
    return(cR);
}