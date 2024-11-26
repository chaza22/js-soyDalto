//un condicional es una sentencia que nos permite validar algo, ejecutar un bloque de codigo solamente si una condicion se cumple, para que se ejecute la condicion tienque ser verdadera
// if (condicion) {
//     // Código a ejecutar si la condición es verdadera
// }


//si lo anterior no se cumple vamos a ver otra condicion, usamos else if las veces que queremos 
// if (condicion1) {
//     // Código a ejecutar si la condicion1 es verdadera
// } else if (condicion2) {
//     // Código a ejecutar si la condicion1 es falsa y la condicion2 es verdadera
// }


//sino se cumple ninguan de las 2 anteriores tenemos por ultima opcion el else
// if (condicion1) {
//     // Código a ejecutar si la condicion1 es verdadera
// } else if (condicion2) {
//     // Código a ejecutar si la condicion1 es falsa y la condicion2 es verdadera
// } else {
//     // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
// }

let nombre = "ronaldo";

if (nombre == "messi") {
    console.log("ese es tu nombre");
    alert("el mejor");
} else if (nombre == "ronaldo") {
    console.log("el segundo mejor");
    alert("camellonaldo");
} else {
    console.log("tito calderon");
    alert("pedilo momo");
}
