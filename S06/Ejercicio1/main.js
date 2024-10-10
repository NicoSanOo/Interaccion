var limiteDeCirculos = 1000;
let contadorDeCirculos = 0;


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
    constructor(params = {}) {this.borderColor = params.borderColor || "#00ff99";
        this.borderWidth = 4;
        this.x = Math.random() * CANVAS.width;
        this.y = Math.random() * CANVAS.height;
                              
        this.speed = {
            x: Math.random() * 0.7,
            y: 0.3
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
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    };
}






function render() {
    // CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
    for (let i = 0; i < 5; i++) {
        let nuevoCirculo = new Circulo({ borderColor: "#ff6600" }); 

        nuevoCirculo.draw();
        // actualizar contador
        // contadorDeCirculos += 1;
        contadorDeCirculos++;
    }
    console.log("contadorDeCirculos:", contadorDeCirculos);
    
    // Condicion para revisar si alcanzamos el limite de circulos
    if (contadorDeCirculos == limiteDeCirculos) {
      CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
      contadorDeCirculos = 0;
    }

  
    
    requestAnimationFrame(render);
}



window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);




/* Happy Coding! 👾 */
