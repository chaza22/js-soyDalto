//la concatenacion es unir string, unimos 2 cadenas de texto
let saludo = "hola messi";
let pregunta = " ¿como estas?";
let frase0 = saludo + pregunta;

document.write(frase0);
console.log(frase0);

let num1 = 2;
let num2 = 4;
let suma = "" + num1 + num2; // sino tubiera las "" adelante los numeros se sumarian y daria 6, y al tenerlos adelante detecta que es un  string y combierte todo en una cadena de texto

document.write(suma);
//tambien podemos escribir los numeros entre comillas para que estos sean string, pero de la forma anterior es mas dinamico de usar

//.concat() es un metodo que concatena strings 
let numero = "2";
let numero2 = 1;
let suma2 = numero.concat(numero2);//no aparece nada poque al no ser string no los concatena, con que uno solo sea string sirve para que se concatenen 

console.log(suma2);
document.write(suma2);

let frase1 = "meti un gol";
let frase = `hoy ${frase1} en el angulo`;//esta es otra forma en ves de usar los "+" para concatener usamos ${}, y todo tiene que estar entre ``

console.log(frase);
document.write(frase);

let nombre = 'mi nombre es "leo messi" y soy el mejor del mundo';//usamos las comillas simples afuera porque queremos usar las comillas dobles dentro del estring, si no usamos la comilla simple no funciona el codigo porque cerras a la mitad el string lo mismo aplica si queremos usar las comillas simples 
document.write(nombre);

 