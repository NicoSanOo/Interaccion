/*
    Vamos a modificar el color del borde de un <div> dependiendo del tamaño de la pantalla.

    Por defecto el borde es blanco.
    Si el ancho de la pantalla es menor a 800 pixeles, el borde será rojo.
    Si el ancho es igual o mayor a 800 será verde.
    Y si el ancho es igual o mayor a 1200 será azul.
*/

/*///// 1. Estableceremos las variables que determinan el límite del ancho de la pantalla para crear nuestra condición. ///*/
let screenThreshold = 800;
let upperScreenThreshold = 1200;


/*///// 2. Luego identificaremos nuestro <div> que existe en el documento HTML ///*/
const DIV = document.getElementById("tester");


/*///// 3. Ahora crearemos nuestra función con la condición que evaluará el tamaño de la ventana para cambiar el color del borde de acuerdo a nuestra regla. ///*/
function isWindowWideEnough(event) {
    if (window.innerWidth >= upperScreenThreshold) {
        DIV.style.borderColor = "blue";

    } else if (window.innerWidth >= screenThreshold) {
        DIV.style.borderColor = "#00ff00";

    } else {
        DIV.style.borderColor = "red";
    }
}


/*///// 4. Por último, configuraremos el evento "window resize" para escuchar cuando la ventana cambie de tamaño y así disparar nuestra función que evalua el tamaño de la ventana. ///*/
window.addEventListener("resize", isWindowWideEnough);




/* Happy Coding! 👾 */

// Documentación sobre los condicionales if / else y otros disponibles:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#if...else_statements

// Documentación sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D