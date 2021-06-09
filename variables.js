const PI = 3.14;
let marca = "ORBEA";
let radio =  30;
let rueda = 2 * PI * radio;
let esDeCarretera = true;

console.log("marca:  " + marca);
console.log("Longitud rueda:  " + rueda);
console.log("Es de carretera ?  " + esDeCarretera);


// objeto
let bici  = {
  marca : "BH",
  precio : 1000,
  radio : 30,
  esDeCarretera : true,
  color : "red"
}

bici.color = "azul";

console.log( bici )
console.log( bici.color )

colores = [
  'rojo', 'azul', 'negro', 'blanco'
]

console.log(colores)
console.log("la segunda posicion es : ---> " + colores[1])

bici.marca = marca
console.log(marca)
console.log(bici.marca)

bici.color = colores[3];

console.log(bici.color)

let esGrande = bici.radio > 30;
let meGusta  = bici.color == "azul" ;

console.log("esGrande...? " + esGrande)

console.log("meGusta...? " + meGusta) 

meGusta  = colores[0] ;







