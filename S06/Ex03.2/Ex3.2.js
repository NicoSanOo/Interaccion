const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}


/*///// 1. Definición de nuestra clase base Círculo para generar objetos ///*/
class Circulo {
    constructor(params = {}) {
        this.borderColor = params.borderColor || "aqua"; // Asignamos la posibilidad de recibir un color de borde diferente (borderColor) cada vez que se genere un círculo nuevo
        this.borderWidth = 4;
        this.x = Math.random() * 200;
        this.y = Math.random() * 200;
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



/*///// 2. Creamos un circulo por medio del comando "new" usando la clase que acabamos de definir. ///*/
let circulo1 = new Circulo();



/*///// 3. Creamos una variable de tipo lista o "array" para guardar los círculos que queremos animar, así podemos mantener registro de su posición y demás características para cambiarlos poco a poco. ///*/
let misCirculos = [];



/*///// 4. Usamos un ciclo "for" para crear nuevos círculo. ///*/
for (let i = 0; i < 7; i++) {
    let nuevoCirculo = new Circulo({ borderColor: "orange" }); // Asignamos un color diferente a estos nuevos círculos para diferenciarlos del primero que hicimos.

    /*///// 4.1 Usamos la función ".push()" incluida en los Arrays para guardar nuestro círculo recién creado. ///*/
    misCirculos.push(nuevoCirculo);
}



/*///// 5. A manera de ejemplo, accedemos al 3er objeto en la lista y modificamos un atributo (marcado por el índice 2 teniendo en cuenta que los índices empiezan a contar desde el "0"). ///*/
misCirculos[2].borderColor = "white"



/*///// 6. Definimos la funcion de renderizado que estaremos repitiendo usando requestAnimationFrame() ///*/
function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    /*/////
        7. Usamos un "ciclo for" para leer nuestro Array y ejecutar una accion por cada elemento guardado allí.

        Podemos sincronizar el total de repeticiones con el total de elementos en nuestro Array leyendo la cantidad de elementos en nuestra lista usando la propiedad ".length". Podemos establecer la condición de que se ejecute nuestro ciclo siempre y cuando el índice sea menor a la cantidad de elementos en nuestro Array.
    ///*/
    for (let i = 0; i < misCirculos.length; i++) {
        misCirculos[i].draw();
        /*
            Aquí estamos accediendo a un objeto dentro de nuestro Array llamado "misCirculos", en cada repetición del ciclo el índice es diferente lo cual nos da acceso a un objeto diferente:

                misCirculos[0] es el equivalente al primer circulo guardado en el Array.
                misCirculos[1] es el equivalente al segundo circulo guardado en el Array, y así sucesivamente.

            Una vez identificado el círculo, podemos acceder a sus propiedades y métodos, en este caso queremos ejecutar su método "draw", por lo cual simplemente añadimos ".draw()" para ejecutar dicha función del objeto.
        */
    }


    /*///// 8. Renderizamos nuestro círculo original que guardamos en la variable circulo1 ///*/
    circulo1.draw();

    requestAnimationFrame(render);
}




/*///// 9. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);




/* Happy Coding! 👾 */

// Documentación sobre las listas "Array", sus propiedades y sus métodos
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D