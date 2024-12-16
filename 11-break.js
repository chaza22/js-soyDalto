//el break hace que se deje de ejecutar el bucle while
let numero = 0;

while (numero < 100){
    numero++;
    document.write(numero);
    if (numero == 10){
        break;
    }
}
//break: es una palabra clave que se utiliza para salir de manera inmediata de un bucle (for, while, do...while) o una estructura de control switch. 
        //Cuando se ejecuta un break, la ejecución del código salta fuera del bloque en el que se encuentra y continúa con el resto del programa.