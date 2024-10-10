const element = document.getElementById("tester");
let start;
let offset = 0;

function move(timeStamp) {
    // timeStamp es un "dato" que nos devuelve a forma de "parámetro" la función request animation frame automáticamente, e indica cuánto tiempo ha pasado desde la primera vez que se cargó el sitio.
  
    // "start" lo estamos usando como un marcador para calcular cuánto tiempo ha pasado desde la primera vez que se invocó la función requestAnimationFrame y el momento presente.
    if (start === undefined) {
        start = timeStamp;
    }

    const elapsed = timeStamp - start;
    offset = Math.min(0.1 * elapsed, 500); // Math.min() es usado aqui para asegurarnos que el elemento se detenga a los 500px
    element.style.transform = `translateX(${offset}px)`;
  
    requestAnimationFrame(move);
}

requestAnimationFrame(move);


// Happy Coding! 👾