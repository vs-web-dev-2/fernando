function saludar(){

  console.log("buenos dias")

}

saludar();

function saludarPorNombre(nombre){


  console.log("hola "+ nombre)


}

saludarPorNombre("fernando")

let amigo = "luis";

saludarPorNombre(amigo);


function saludarElaborado(nombre , saludo="hola"){
  console.log(saludo + ",  " + nombre)
}

saludarElaborado("fernando" , "buenos dias")

function calcularCircu(r){
  const PI = 3.14;
  return 2 * PI * r
}

const circu = calcularCircu(5);
console.log(circu)
