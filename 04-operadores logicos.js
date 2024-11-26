//los operadores logicos se basan en los operadores de comparacion

//operadores de comparacion: comparan dos expresiones y devuelve un valor booleano que representa la relacion de sus valores 

let num1 = 12;
let num2 = 23;
let texto = "12";

document.write(num1 == texto);//verifica si son del mismo valor, no distingue de tipo de dato 
document.write(num1 != num2);//se fija si los 2 valores son distintos, esto tambien funciona con texto, se fija en el valor y no en el tipo de dato
document.write(num1 === texto);//compara que sean strictamente iguales, tanto en el tipo de dato como en su valor
document.write(texto !== num1);//verificamos si no es estrictamente igual
document.write(num1 > num2);//numero 1 no es mayor que numero 2
document.write(num1 < num2);//numero 1 es menor que numero 2
document.write(num1 >= num2);//es mayor o igual
document.write(num1 <= num2);//es menor o igual 


//operadores logicos: nos devuelven un resultado a partir de que se cumpla o no una condicion, su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos 

let valor1 = true;
let valor2 = true;

let resultado1 = valor1 && valor2;//AND/Y/&& si las 2 condiciones se cumplen va a ser true y si una sola es falsa va a ser todo falso, acepta solo booleanos
let resultado2 = valor1 || valor2;//OR/|| si alguna de las 2 son true todo es verdadero, si las 2 son falsa todo es falso, solo con booleanos 
let resultado3 = !valor1; //NOT/! es el "not logico" nos devuelve lo contrario a lo que le demos, solo con booelanos
document.write(resultado1);
document.write(resultado2);
document.write(resultado3);

let nume1 = 12;
let nume2 = 13;
let nume3 = 114;
let nume4 = 325;
let nume5 = 133;

let operacion = (nume1 > nume5 || nume4 < nume2) && (!(nume5 != nume4) && nume2 != nume3);//swe resuelve como las operaciones combinadas
document.write(operacion);
console.log(operacion);


//camel case dice que todo lo que escribamos la primera letra tiene que ir en minuscula y despues cada palabra nueva con mayuscula la primer letra
let ejemploPrimero = "ejemploPrimeroCamelCase";
console.log(ejemploPrimero);