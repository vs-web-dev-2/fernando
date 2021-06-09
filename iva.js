
const IVA = 21;

function calcIva(precio){
  return precio * ( IVA / 100 );
}

function calcImporte( precio ){
  return calcIva(precio) + precio;
}

const salida = calcImporte(200);

console.log("El importe de 200 con IVA DEL " + IVA + " ES : " + salida);