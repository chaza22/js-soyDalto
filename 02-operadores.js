//operadores de asignacion asigna un valor al operando de la izquierda basado en el valor del operando de la derecha

let numero = 10;

numero += 2;//asiganacion de adicion
numero -= 2;//asignacion de sustraccion 
numero *= 2;//asignacion de multiplicacion
numero /= 2;//asignacion de division
numero **= 2//asignacion de exponenciacion
numero %= 5;//asignacion de resto

console.log(numero);

//operadores aritmeticos toman valores numericos (sean literales o variables) como sus operandos y retornan un valor numerico unico, no es un dato primitivo porque es construido en base a otro

let num1 = 2;
let num2 = 4;
let numeroEntero = num1 + num2;//adicion
console.log(numeroEntero);
let decremento = num1--;//decremento, solamente nesita un numero
console.log(decremento);
let division = num1 / num2;//division de numeros, ahce falta 2 numeros
console.log(division);
let exponencial = num2**2;//exponencializacion, en este caso es al 2, si no ponemos nada no se realiza
console.log(exponencial);
let incremento = num2++;//incremento, necesita un solo numero, suma de a 1 unidad
console.log(incremento); 
let resto = num1&num2;//resto, depende de 2 valores
console.log(resto);
let sustracc1on = num1-num2;//ssutraccion/resta
console.log(sustracc1on);
let negacionUnaria = -num2;//negacion unaria, el resultado es el contrario
console.log(negacionUnaria);