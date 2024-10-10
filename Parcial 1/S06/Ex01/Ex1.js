// Este ejemplo imprime los valores en el DOM para facilitar la previsualización, pero lo importante es lo que está sucediendo en JavaScript.

const TITLE1 = document.getElementById("console1");
const TITLE2 = document.getElementById("console2");
const TITLE3 = document.getElementById("console3");
const TITLE4 = document.getElementById("console4");
const TITLE5 = document.getElementById("console5");
const TITLE6 = document.getElementById("console6");
const TITLE7 = document.getElementById("console7");


/* ///// Ejemplos de resultados de Operadores Matemáticos ///*/
let ejemplo1 = 2 ** 3; // "**" es el equivalente a las "potencias", esto se traduciría como 2 elevado al "cubo"
TITLE1.innerText = ejemplo1;


/* 
  "+=" es una abreviación para sumar a una variable, también hay abreviaciones para otras operaciones matemáticas:
  +=, -=, *=, /=
  
  Puedes consultar la lista completa de operadores de comparación aquí:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators
 */
ejemplo1 += 5; // La sintaxis larga sería algo como: ejemplo1 = ejemplo1 + 6;
TITLE2.innerText = ejemplo1;


// El operador de "Suma" (+) puede utilizarse para unir cadenas de texto, por ejemplo:
let ejemploA = "Soy un texto.";
let ejemploB = " Y yo otro texto.";
let ejemploC = ejemploA + ejemploB;

TITLE3.innerText = ejemploC;




/* ///// Ejemplos de resultados de Operadores de Comparación ///*/
let ejemplo2 = 30;
let booleano1 = ejemplo1 > ejemplo2;
/*
  ">" compara 2 valores de una manera que se traduciría como "¿El valor a la izquierda del símbolo  > es mayor que el valor a la derecha?".
  
  Puedes consultar la lista completa de operadores de comparación aquí:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators
*/

TITLE4.innerText = booleano1;

TITLE5.innerText = typeof ejemplo1; // "typeof", es decir "type of" en inglés, es un comando especial que nos permite saber el tipo de dato de una variable: número, texto, booleano, etc.

TITLE6.innerText = typeof booleano1;


let booleano2 = typeof ejemplo1 == typeof ejemplo2;
TITLE7.innerText = booleano2;





/* Happy Coding! 👾 */