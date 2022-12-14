let resolution = 30;
let w;
let c;
let n;

let sinOut = 0;
let cNoise = 0;

let c2;
let c3;

function setup() {
  noStroke();
  
  c2 = color (0);
  c3 = color (255, 0);
  backgroundDrawing();
  //fill('hsb(' + String(Math.round(random(0, 360))) + ', 83%, 28%)');
}

$(window).mousemove(function(){ 
    //fill('hsb(' + String(Math.round(random(0, 360))) + ', 83%, 28%)');
    //square (mouseX, mouseY, w / 2);
});

function backgroundDrawing() {
    let width = $(window).width();
    let height = $(window).height();

    if (width <= height) {
        createCanvas(width * 2, height);
        $(".p5Canvas").css({'min-width' : 'auto','min-height' : '100vh'});
        //width = width * 2;
    } else {
        createCanvas(width, height);
        $(".p5Canvas").css({'min-width' : '100vw','min-height' : ''});
    }

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

    fill(15, 240);
    rect(0, 0, width, height);
}

function randomColor() {
    cR = random(0, 255);
    return(cR);
}

// $(window).resize(function() {
//     $(".p5Canvas").css({'min-width' : '100vw','min-height' : '100vh'});
// });