let mouseY;
let mouseX;

let particle;
let pDIV;
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
    constructor (x, y, opacity) {
        this.x = x;
        this.y = y;
        this.opacity = opacity;

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

        this.die = function(p) {
            this.opacity -= .5;
            console.log(this.opacity);
            // p.style.opacity = this.opacity;
            if (this.opacity <= 0) {
                p.remove();
            }
        }
    }
}

function draw() {
    particle = new Particle (mouseX, mouseY, 1);
    particle.makeParticle();
    pDIV = document.getElementById("p");
    particle.die(pDIV);
}

pDIV.addEventListener("")

window.onload = function() {init();};