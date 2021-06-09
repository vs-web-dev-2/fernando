
const IVA = 21;

function calcIva(precio){
  return precio * IVA;
}

function calcImporte( precio ){

  return calcIva(precio) + precio;

}

const salida = calcImporte(100);