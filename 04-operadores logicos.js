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
