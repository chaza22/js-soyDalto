//un arrays asociativo es un array que tiene un valor asociado
let pc = {
    nombre: "pcMaster",
    procesador: "ryzen 5",
    ram: "16gb",
    almacenamiento: "1tb",
};
document.write(pc["ram"]);//busco dentro del array el nombre del dato asociado que quiero, si trato de buscar el dato por poscion me dice que esta indefinido

let frase =`el nombre de mi pc es: <b>${pc["nombre"]}</b> <br> 
            el procesador de mi pc es: <b>${pc["procesador"]}</b> <br>
            la ram de mi pc es: <b>${pc["ram"]}</b> <br>
            el alamacenamiento de mi pc es: <b>${pc["alamacenamiento"]}</b> <br>`;
document.write(frase);
//<b> </b>: Hace que el texto dentro de <b> y </b> se muestre más destacado (en negrita)
//<br>: La etiqueta <br> (break line) inserta un salto de línea en el documento HTML. Es como presionar "Enter" en un procesador de texto.
