/*///// Código del ejercicio de configuración de canvas (S05. Ex.01.) ///*/
const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}



/*///// 1. Definir parámetros de movimiento ///*/
let speed = {
  x1: 2,
  y1: 1,
  x2: 1,
  y2: 1
};

// Usaremos variables para definir la posicion de los círculos, así al actualizar estas variables, los círculos serán renderizados en diferentes posiciones poco a poco.
let circlePos = {
  x1: 50,
  y1: 40,
  x2: 120,
  y2: 70
};



/*///// 2. Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() ///*/
function renderCircles() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
  /*///// 3. Secuencia de comandos para dibujar un círculo o elipse ///*/
    /* 
      1. Definir el estilo de la línea o relleno (como color y grosor).
      2. Definir el inicio de la figura usando la función beginPath()
      3. Usar la función ellipse() para crear el círculo o elipse
        los parametros que recibe esa función son: ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
        Ojo: 
          - ellipse crea circunferencias o "fragmentos" de circunferencia, esto se define a través de los ángulos: un ángulo de inicio y un ángulo final, para dibujar una circunferencia completa el ángulo inicial sería 0° y el final serían 360°.
          - los ángulos están en "radianes" y no en grados, esto quiere decir que debemos realizar la conversión a radianes para especificar el ángulo 
            - 1 vuelta completa equivale a 360°, que en radianes equivale a 2 veces PI (3.1416 * 2)
            - 1/2 vuelta (media vuelta) equivale a 360°, que en radianes equivale a PI (3.1416)
          - "counterclockwise" es opcional

      *. (Opcional) Usar la función closePath() para trazar una línea entre el ángulo (o punto de inicio) y el final.
      4. Usar la función stroke() para renderizar el borde de la figura en el canvas // o usar fill() para renderizar el relleno de la figura en el canvas
        - Nota: se pueden usar ambos y con diferentes colores: un estilo para el relleno (CTX.fillStyle) y otro para el borde (CTX.strokeStyle)
      
      5. En caso de desear realizar más círculos, se repiten los pasos del 1 al 4.
    */
  CTX.strokeStyle = "#00ff99";
  CTX.lineWidth = 4;
  CTX.beginPath();
  CTX.ellipse(circlePos.x1, circlePos.y1, 30, 30, 0, 0, Math.PI);
  CTX.closePath();
  CTX.stroke();
  
  
  CTX.fillStyle = "#ff9900";
  CTX.beginPath();
  CTX.ellipse(circlePos.x2, circlePos.y2, 15, 15, 0, 0, PI2);
  CTX.fill();

  
  /*///// 4. Actualizaremos la posición de los círculos antes de llamar renderCircles en el siguiente frame ///*/
  circlePos.x1 = circlePos.x1 + speed.x1;
  circlePos.y1 = circlePos.y1 + speed.y1;
  
  circlePos.x2 = circlePos.x2 + speed.x2;
  circlePos.y2 = circlePos.y2 + speed.y2;
  
  
  requestAnimationFrame(renderCircles);
}



/*///// 5. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderCircles);




/* Happy Coding! 👾 */
// Detalles sobre la función ellipse(): https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
// Detalles sobre la alternativa arc(): https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc

// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D