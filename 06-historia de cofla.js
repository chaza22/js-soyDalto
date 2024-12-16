/*
3 chicos de 23 años van a comprar helado, pero los precios estan al lado de cada estante con su respectivo helado. 
ellos quieren comprar el helado mas caro que puedan con la plata que tiene, asi que... veamos como podemos ayudarlos
roberto tiene $1.5 USD
pedro tiene $1.7 USD
cofla tiene $3 USD

helados:
palito de helado de agua: $0.6 USD
palito de helado de crema: 1 USD
bombon eldo marca heladix: $1.6 USD
bombon eldo marca heladovich: $1.7 USD
bombon eldo marca helardo: $1.8 USD
potecito de helado con confites: $2.9 USD
pote de 1/4 KG -> $2.9 USD

CREAR SOLUCION:
-pedirles que ingresen el monto que tienen y mostrarles el helado mas caro
-si hay 2 o mas con el mismo, mostrar ambos
-cofla quiere saber cuanto es el vuelto 
*/


let plataRoberto = prompt("¿cuanta plata tenes?");
let plataPedro = prompt("¿cuanta plata tenes?");
let plataCofla = prompt("¿cuanta plata tenes?");

plataCofla = parseInt(plataCofla); //convierte el astring que le damos en un entero

if (plataRoberto >= 0.6 && plataRoberto < 1){
    alert("comprate un el de agua");
    console.log("comprate un elado de agua");
} else if (plataRoberto >= 1 && plataRoberto < 1.6) {
    alert("comprate el de crema");
    console.log("comprate el de crema");
} else if (plataRoberto >= 1.6 && plataRoberto < 1.7) {
    alert("comprate el heladix");
    console.log("comprate el heladix");
} else if (plataRoberto >= 1.7 && plataRoberto < 1.8) {
    alert("compra el heladovich");
    console.log("compra el heladovich");
} else if (plataRoberto >= 1.8 && plataRoberto < 2.9) {
    alert("compra el helardo");
    console.log("compra el helardo");
} else if (plataRoberto >= 2.9) {
    alert("compra el helado de confites o el de 1/4");
} else {
    alert("no te alcanza nada");
    console.log("no te alcanza nada");
}

if (plataCofla >= 0.6 && plataCofla < 1){
    alert("comprate un el de agua");
    alert("y te sobra" + (plataCofla - 0.6));
    console.log("comprate un elado de agua");
} else if (plataCofla >= 1 && plataCofla < 1.6) {
    alert("comprate el de crema");
    alert("y te sobra" + (plataCofla - 1));
    console.log("comprate el de crema");
} else if (plataCofla >= 1.6 && plataCofla < 1.7) {
    alert("comprate el heladix");
    alert("y te sobra" + (plataCofla - 1.6));
    console.log("comprate el heladix");
} else if (plataCofla >= 1.7 && plataCofla < 1.8) {
    alert("compra el heladovich");
    alert("y te sobra" + (plataCofla - 1.7));
    console.log("compra el heladovich");
} else if (plataCofla >= 1.8 && plataCofla < 2.9) {
    alert("compra el helardo");
    alert("y te sobra" + (plataCofla - 1.8));
    console.log("compra el helardo");
} else if (plataCofla >= 2.9) {
    alert("compra el helado de confites o el de 1/4");
    alert("y te sobra" + (plataCofla - 2.9));
} else {
    alert("no te alcanza nada");
    console.log("no te alcanza nada");
}

if (plataPedro >= 0.6 && plataPedro < 1){
    alert("comprate un el de agua");
    console.log("comprate un elado de agua");
} else if (plataPedro >= 1 && plataPedro < 1.6) {
    alert("comprate el de crema");
    console.log("comprate el de crema");
} else if (plataPedro >= 1.6 && plataPedro < 1.7) {
    alert("comprate el heladix");
    console.log("comprate el heladix");
} else if (plataPedro >= 1.7 && plataPedro < 1.8) {
    alert("compra el heladovich");
    console.log("compra el heladovich");
} else if (plataPedro >= 1.8 && plataPedro < 2.9) {
    alert("compra el helardo");
    console.log("compra el helardo");
} else if (plataPedro >= 2.9) {
    alert("compra el helado de confites o el de 1/4");
} else {
    alert("no te alcanza nada");
    console.log("no te alcanza nada");
}
 