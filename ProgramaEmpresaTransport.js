const readlineSync = require('readline-sync');

let cantidadDeEmpaque = +readlineSync.question("Cuantos empaques deseas agregar");
let totalimpuesto = 0;
let promedioDeCostoDeproducto = 0;
let productoMayorDimension = 0;
let TotalDelFlete = 0;
let dimensionMayor = 0;

for (let i = 1; i <= cantidadDeEmpaque; i++) {
    var AnchodelPaquete = +readlineSync.question(`Cual es el ancho del paquete ${i} en CM:`);
    var AlturaDelPaquete = +readlineSync.question(`Cual es la altura del paquete ${i} en CM:`);
    var ProfundidadDelPaquete = +readlineSync.question(`Cual es la profundidad del paquete ${i} en CM`);

    let volumenDelPaquete = AnchodelPaquete * AlturaDelPaquete * ProfundidadDelPaquete;
    let costoDelPaquete = volumenDelPaquete * 100;
    let impuestoDelPaquete = 0;

    if (volumenDelPaquete > 1000 && volumenDelPaquete <= 10000) {
        impuestoDelPaquete = costoDelPaquete * 0.1; //Impuesto 10%
    }
    else if (volumenDelPaquete > 10000) {
        impuestoDelPaquete = costoDelPaquete * 0.2; //Impuesto 20%
    }

    TotalDelFlete += costoDelPaquete + impuestoDelPaquete;
    totalimpuesto += impuestoDelPaquete;

    if (volumenDelPaquete > dimensionMayor) {
        dimensionMayor = volumenDelPaquete;
        productoMayorDimension = i;
    }
}

promedioDeCostoDeproducto = TotalDelFlete / cantidadDeEmpaque;

console.log("Costo total del flete: ", TotalDelFlete);
console.log("Producto de mayores dimensiones: ", productoMayorDimension);
console.log("Promedio del costo de productos en el flete: ", promedioDeCostoDeproducto);
console.log("Total de impuestos por el flete: ", totalimpuesto);
