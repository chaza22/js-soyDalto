//en el caso de do while primero ejecuta el codigo y depues pregunta la considicon del while para ver si tiene que volver a ejecutar el do o tenerminar el bucle
let numero = 0;
do {
    document.write(numero + "<br>");
    numero++
}
while (numero <= 6);
console.log(numero);
//el while nunca ejecuta el codigo si la condicion es falsa, el do while ejecuta el codigo despues pregunta y si es falso no lo ejecuta mas
