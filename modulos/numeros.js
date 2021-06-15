let numeros = [1,2,3,4,5,6,7,8,9];
let pares = []

function obtener1(){

  for(let x=0;x<numeros.length;x++){
      let numero = numeros[x];
      if(numero % 2 === 0){
        pares.push(numero);
      }
      return pares;
  }

}

console.log(` obtener los primos :  ${obtener1()}  `)