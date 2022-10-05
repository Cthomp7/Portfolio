let mouseY;
let mouseX;

let particle;
let o = 1.0;

function init(){
    let drawing = document.getElementById('drawing');
}

drawing.addEventListener("mouseover", triggerCanvas);

function triggerCanvas() {
    drawing.addEventListener("mousemove", () => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        draw();
      });

    if (particle != null) {
        let pDIV = document.getElementById("p");
        particle.die(pDIV);
    }
}

class Particle {
    constructor (x, y) {
        this.x = x;
        this.y = y;

        this.particleSystem = function(p) {
            p.style.backgroundColor = "yellow";
            p.style.width = "10px";
            p.style.height = "10px";
            p.style.position = "absolute";
            p.style.opacity = "1.0";
            p.style.top = mouseY;
            p.style.left = mouseX;
        }

        this.makeParticle = function() {
            let p = document.createElement("div");
            p.id = "p";
            this.particleSystem(p);
            drawing.appendChild(p);
        }

        this.born = function() {
            //let pushDirection = Math.random(0, 360); //to push a random initial push direction
            // this.x = 
            // this.y = 
        }

        this.die = function(p) {
            p.style.opacity = ".1";
            if (p.style.opacity <= 0) {
                p.remove();
            }
        }
    }
}

function draw() {
    particle = new Particle (mouseX, mouseY);
    particle.makeParticle();
    let pDIV = document.getElementById("p");
    particle.die(pDIV);
}

window.onload = function() {init();};