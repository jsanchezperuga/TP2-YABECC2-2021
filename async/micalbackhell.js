// UTILIZANDO LECTURA ASYNCRONA (NO SE DEBE UTILIZAR LOS METODOS fs.readFileSync)

// 1.- Leer el archivo inventors.json
// 2.- Insertar un nuevo inventor, escribir el archivo
// 3.- Leer nuevamente el archivo, con el nuevo inventor
// 4.- eliminar el inventor que inserté, escribir el archivo
// 5.- Leer nuevamente el archivo, sin el inventor

const fs = require('fs');
const path = './inventors.json';


let datosInventors = null;
function getInventors(){
    let retorno = 3;
    fs.readFile(path,'utf-8',(error,data)=>{
    if(!error){
        datosInventors = data;

    }else{
        console.log(error.message);
    }
});
}

function pushInventor(inventor){
    
}

console.log(getInventors());