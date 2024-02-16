const readlineSync = require('readline-sync');


// Se solicita al usuario la cantidad de empaques que desea agregar, el "+" convierte la entrada a número.
let cantidadDeEmpaque = +readlineSync.question("Cuantos empaques deseas agregar:"); 

// Se inicializan las variables para el total de impuestos, el promedio de costo de producto, el producto con mayor dimensión, el total del flete y la dimensión mayor.
let totalimpuesto = 0;
let promedioDeCostoDeproducto = 0;
let productoMayorDimension = 0;
let TotalDelFlete = 0;
let dimensionMayor = 0;

// Se ejecuta un bucle para cada empaque.
for (let i = 1; i <= cantidadDeEmpaque; i++) {
    
// Se solicita al usuario las dimensiones del paquete actual.
    var AnchodelPaquete = +readlineSync.question(`Cual es el ancho del paquete ${i} en CM : `);
    var AlturaDelPaquete = +readlineSync.question(`Cual es la altura del paquete ${i} en CM : `);
    var ProfundidadDelPaquete = +readlineSync.question(`Cual es la profundidad del paquete ${i} en CM : `);

// Se calcula el volumen del paquete actual y su costo.
    let volumenDelPaquete = AnchodelPaquete * AlturaDelPaquete * ProfundidadDelPaquete;
    let costoDelPaquete = volumenDelPaquete * 100;
    let impuestoDelPaquete = 0;

// Se determina el impuesto del paquete según su volumen.
    if (volumenDelPaquete > 1000 && volumenDelPaquete <= 10000) {
        impuestoDelPaquete = costoDelPaquete * 0.1; //Impuesto 10%
    }
    else if (volumenDelPaquete > 10000) {
        impuestoDelPaquete = costoDelPaquete * 0.2; //Impuesto 20%
    }

// Se actualiza el total del flete y el total de impuestos.    
    TotalDelFlete += costoDelPaquete + impuestoDelPaquete;
    totalimpuesto += impuestoDelPaquete;

 // Se verifica si el paquete actual es el de mayor dimensión.    
    if (volumenDelPaquete > dimensionMayor) {
        dimensionMayor = volumenDelPaquete;
        productoMayorDimension = i;
    }
}

// Se calcula el promedio del costo de los productos en el flete.
promedioDeCostoDeproducto = TotalDelFlete / cantidadDeEmpaque;

// Se muestran los resultados en la consola.
console.log("Costo total del flete: ", TotalDelFlete);
console.log("Producto de mayores dimensiones: ", productoMayorDimension);
console.log("Promedio del costo de productos en el flete: ", promedioDeCostoDeproducto);
console.log("Total de impuestos por el flete: ", totalimpuesto);
