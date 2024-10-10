var rightEdgeOfLastCircle = 0;


const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}


class Circulo {
    constructor(params = {}) {
        this.borderColor = params.borderColor || "#00ff99";
        this.borderWidth = 4;
        this.radiusX = 30;
        this.radiusY = 30;
        this.width = this.radiusX * 2;
        this.distanceX = 30;
        
        this.x = params.x || this.radiusX;
        this.y = params.y || this.radiusY;
                              
        this.speed = {
            x: 0,
            y: Math.random() * 0.3
        }
    }

    updatePosition() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    };
}

let listaDeCirculos = [];

while(rightEdgeOfLastCircle < CANVAS.width) {
    let nuevoCirculo = new Circulo({
        x: rightEdgeOfLastCircle
    });
    listaDeCirculos.push(nuevoCirculo);

    rightEdgeOfLastCircle = nuevoCirculo.x + nuevoCirculo.width + nuevoCirculo.distanceX;
}





function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for (let i = 0; i < listaDeCirculos.length; i++) {
        listaDeCirculos[i].draw();
    }

    requestAnimationFrame(render);
}



window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);




/* Happy Coding! 👾 */



// 1. Subir este ejercicio a la presentacion
// 2. Mander un proyecto de referencia a Tara del objetivo de la clase