//en una variable se le guarda un dato, este ocupa un espacio dentro de la memoria de nuestro programa
recipiente = "papel";
alert(recipiente);
console.log(recipiente);
/*
tipos de datos: string (cadena de texto), number, booleanos, symbol (no es un tipo de dato primitivo)
*/
string = "cadena de texto";
number = 12;
booleano = true;
booleano2 = false;
//estos son datos primitivos, osea que ya viene con el lenguaje
//casos especiales de datos: undefined, null, nan. Son 3 tipos de datos que nos habla que la variable no esta definida o hay un error
//la varaible se puede declarar, inicializar y se puede modificar a lo largo del tiempo
//formas de declarar una variable: var, let, const
//var tiene un alcanze amplio 
//let limita el alcance de la variable al bloque en el que la ejecutamos
//const es una constante, no se puede cambiar, si tratamos saltaria error. Lo usamos cuando sabemos que algo va a tener siempre el mismo valor
const jugador = "messi"; //si trato de cambiar "messi" haciendo jugador = "suarez";, me salta error y me dice que jugador en una variable constante
//const no se puede declarar y despues inicializar, se tiene que ahcer las 2 cosas en la misma linea, sino te da error si lo haces 
let numero; //de esta forma la variable numero ya existe en el programa, si pedimos esta variable nos da "undefined" porque no esta inicializada
            //undefined es un tipo de dato que nos dice que la variable existe en el programa pero no tiene valor, esta sin definir
numero = 29; //aca ya tiene una varaible inicializada 
let numero2 = 12; //aca la definimos y inicializamos en la misma linea, let puede ser modificada mas adelante a diferencia de const

//multiples variables 
let numero01 = 122, numero02 = 1323;
//otra forma mas prolija de escribir las multiples variables 
let num = 12;
let num2 = 123;

//en algunas partes de JS es posible llamar a una parte del codigo antes de que esta sea definida

let numer = null; //null dice que tiene un valor y ese valor es que va estar vacia,no vale nada es "nulo o vacia"
//null ya esta inicializada y su valor final va a ser vacio

let numero_1 = 12;
let numero_2 = "pedro";
alert(numero_1 * numero_2); //esto nos devuelve NaN (Not a Number),no es un numero, esto nos aparece cuando queremos hacer alguna operacion con un numero y un dato esta mal

//prompt es una de las api de JS que permite darle un dato
let decime = prompt ("como te llamas"); //esto es una funcion y nos devuelve el dato que le escribimos 
alert("hola" + " " + decime);
console.log("hola" + " " + decime);