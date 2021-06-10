let colores = ['red', 'yellow','orange']

function pintar( ){
  for(let i=0;i<colores.length;i++){
  
    console.log(colores[i])
    
  }

  console.log("...............")
  
}

pintar();

colores[1] = "negroooooo"

pintar();

colores.push("cyan")

pintar();


colores.forEach( (color, index) => {

  console.log(`item ${color} --> ${index} `)


})