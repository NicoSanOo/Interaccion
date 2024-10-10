/*///// Código de configuración de canvas y movimiento del ejercicio anterior con círculos (S05. Ex.03.) ///*/
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

let speed = {
  x1: 2,
  y1: 1
};

let imagePos = {
  x1: 0,
  y1: 0
};


/*///// 1. Crear la variable que va a recibir la información de la imagen a renderizar. ///*/
let downloadingImage;



/*///// 2. Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() ///*/
function renderImage() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
  /*///// 3. Secuencia de comandos para dibujar una imagen ///*/
    /*
      0. Primero que nada, la imagen debe ser descargada por el navegador para poder utilizarse. Ver el último paso para más información.
      1. A diferencia de las figuras que hemos dibujado hasta ahora que requieren estilo y declarar el inicio del trazo, para las imágenes solo necesitamos llamar la función haciendo referencia a la imagen que queremos renderizar.
      
      1.1 La sintaxis básica de la función es: drawImage(image, dx, dy). Estos 3 parámetros son obligatorios:
        image: se refiere al código de la imagen cargada por el navegador.
        dx: posicion en el eje X, partiendo de la esquina superior izquierda de la imagen.
        dy: posicion en el eje Y, partiendo de la esquina superior izquierda de la imagen.
        
        También puede recibir parámetros adicionales para generar "spritesheets", como lo son: drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight).
        Ver la documentación en Mozilla docs para obtener más info: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    */
  
  CTX.drawImage(downloadingImage, imagePos.x1, imagePos.y1);

  
  /*///// 4. Actualizaremos la posición de la imagen antes de llamar renderImage en el siguiente frame ///*/
  imagePos.x1 = imagePos.x1 + speed.x1;
  imagePos.y1 = imagePos.y1 + speed.y1;


  requestAnimationFrame(renderImage);
}



/*///// 5. Inicializar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);

/*
  Para renderizar una imagen en el canvas, el archivo conteniendo dicha imagen debe ser descargada por el navegador para poder utilizarse; dependiendo del tamaño del archivo y la velocidad del internet, esto puede tardar unos segundos (o minutos si no tenemos cuidado). Por ello, iniciaremos el loop de requestAnimationFrame hasta que la imagen haya sido descargada y esté lista para usarse.
*/

/*///// 6. Cargar imagen ///*/
/*///// 6.1 Crear variable conteniendo nuestra imagen utilizando el constructor Image() ///*/
downloadingImage = new Image();

/*///// 6.2 Definir que queremos que suceda cuando termine de cargar la imagen ///*/
downloadingImage.onload = function(){
    requestAnimationFrame(renderImage);
};


/*///// 6.3 Asignar el "origen" o "source" de la imagen que queremos cargar, esto va a disparar inmediatamente la descarga (o "loading") y cuando termine, como si fuera un evento, disparará la función onload() que creamos en el paso anterior ///*/
downloadingImage.src = "https://mejorconsalud.as.com/wp-content/uploads/2016/03/chica-triste-falsas-ilusiones.jpg"





/* Happy Coding! 👾 */
// Detalles sobre la función drawImage(): https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D