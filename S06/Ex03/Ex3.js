const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}


/*///// 1. Definición del círculo como un objeto {} ///*/
let circulo = {
    /*///// 1.1 Empezamos definiendo las "propiedades" del objeto, es decir los datos, como lo son: color, grosor de linea, posicion y velocidad; aunque pueden ser más. ///*/
    borderColor: "#00ff99",
    borderWidth: 4,
    x: 0,
    y: 0,
    speed: {
        x: 0.7,
        y: 0.3
    },


    /*///// 1.2 Continuamos con los "métodos" del objeto, es decir las funciones, como lo son: actualizar la posición para crear la ilusión de animación y los comandos para renderizar; aunque pueden ser más, tantos como queramos. ///*/
    updatePosition: function() {
        this.x += this.speed.x;
        this.y += this.speed.y;

        /*
            Una situación interesante que sucede con los objetos es que se activa un comando llamado "this", que hace referencia al objeto que posee dichas propiedades/métodos siempre y cuando se utilice dentro del mismo objeto. Esto es parte de un concepto de programación con JavaScript llamado "scope", por el momento no profundizaremos en ello y es suficiente con saber que existe.

            Esto es lo que nos permite hacer operaciones como "this.x += this.speed.x;", que es una sintaxis más corta para decir "circulo.x += circulo.speed.x;" y que tiene otros usos que veremos en los ejercicios siguientes.
        */
    },

    draw: function() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();

        /*
            En esta función de render pueden apreciar como además de leer las propiedades del objeto usando "this", también podemos leer y ejecutar los métodos/funciones del objeto, como la función updatePosition() que definimos hace unas líneas.
        */
    }
}




/*///// 2. Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() ///*/
function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    circulo.draw();

    requestAnimationFrame(render);
}



/*///// 3. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);




/* Happy Coding! 👾 */

// Documentacion sobre this y el "scope" o contexto:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D