// el while es un bucle el cual pregunta siempre lo mismo, se pregunta sobre la condicion del while si se cumple se ejecuta el codigo y vuelve a preguntar a la condicion y asi hsata al infinito, nosotros tenemos que decirle cuando parar
// let numero = 0;
// while (numero < 10){
//     document.write(numero);
// } //esto un ejemplo de un bucle infinito, porque como el valor del numero no cambia siempre va imprimir el mismo numero

let numero = 0;
while (numero < 10){
    numero++;
    document.write(numero);
} //aca no es un bucle infinito porque cada vez que pregunta cuanto es el valor del numero le suma 1 mas al numero y asi sucesivamente hasta que no se cumple mas la condicion 
alert(numero);//ahora el valor de "numero" es 10 porque el while lo modifico 


