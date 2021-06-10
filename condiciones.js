let bici1 = { marca:"bh",    precio:500,  radio:30,  esDeCarretera:true,  color:"amarillo"}
let bici2 = { marca:"giant", precio:1200, radio:40,  esDeCarretera:false, color:"azul"}
let bici3 = { marca:"orbea",    precio:600,  radio:20,  esDeCarretera:true,   color:"blanco"}

function compararBici(bici){

  biciComprada = true
  
  console.log(
    `    Bici comprada x ${bici.precio} € !!!!!!!!!!!!!!!!!!
    Marca : ${bici.marca}
    Color ${bici.color}
    Carretera ${bici.esDeCarretera}
    `)
 
}

function descartar(bici){

  console.log(`
  -- PRECIO : ${bici.precio} € --

      Bici descartada , por cara :(
      Marca : ${bici.marca}
      Color ${bici.color}
      
    --------------------------------------------
    `)
 
}

function comprarBici(bici){

  if(((bici.color === color) || ( !bici.esDeCarretera )) && !biciComprada ) {
    compararBici(bici)
  }else{
    if(!biciComprada) descartar(bici)
  }
  

}

//rojo o no montaña

let biciComprada = false;
let price = 300;
let color = "rojo";

comprarBici(bici1);
comprarBici(bici2);
comprarBici(bici3);