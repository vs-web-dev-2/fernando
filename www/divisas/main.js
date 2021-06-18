

const nodoFecha    = document.getElementById("fecha");
const nodoCotLista = document.getElementById("cotizacionesList");
const url = "http://api.frankfurter.app/latest";

const request = fetch(url);

const bodyJson = request.then( (data)=>{
  return data.json()
})

// bodyJson.then( (data)=> procesarData(data) ) es lo mismo q lo de abajo

bodyJson.then( procesarData )

request.catch()
request.finally()


function procesarData(data){

  const objetCot = data.rates,
        misKeys = Object.keys(objetCot);
        
  nodoFecha.innerText = data.date;

  let celda = ""

  misKeys.forEach( (key , index) => {
  
    celda = celda + "<p><span>" +   key  + "</span><span>" +   objetCot[key] + "</span></p>"

  })


  nodoCotLista.innerHTML = celda;

}