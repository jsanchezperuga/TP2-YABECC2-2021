const fs = require('fs');
const PATH =  '../data/inventors.json';

function getInventors(){
    let file = fs.readFileSync(PATH,'utf-8');
    let data = JSON.parse(file);
    return data.inventors;
}

function getInventor(id){
     return getInventors()
        .filter(inv => inv._id === id)
}

function pushInventor(inventor){
    let dataInventors = getInventors();
    dataInventors.push(inventor);
    // fs.writeFileSync(PATH,JSON.stringify({inventors:dataInventors}),null,' ');
    writeToFile(dataInventors);

}

function updateInventor(id, inventor){
    let dataInventors = getInventors();
    let i = getIndexById(id,dataInventors);
    if(i){
        dataInventors[i]=inventor;
        //fs.writeFileSync(PATH,JSON.stringify({inventors:dataInventors}),null,' ');
        writeToFile(dataInventors);
    }else{
        console.log('No se encontró un registro con id ', id);
    }
}

function deleteInventor(id){
    //obtengo la data
    let data = getInventors();
    //busco el elemento en el array y almaceno su indice
    let i = getIndexById(id,data);
    //si el indice existe, lo saco del array con un splice y lo escribo
    if(i>=0){
        console.log('id encontrado');
        let removedItems = data.splice(i,1);
        writeToFile(data);
    }else{
        console.log('No se encontró un registro con id ', id);
    }
        
}

//como estoy usando más de una vez la funcionalidad de encontrar el indice correspondiente a un id voy a modularizarla en una funcion
function getIndexById(id,array){
    return array.findIndex((e)=>e._id===id);
}
//lo mismo con la escritura del .json, se hace una función
function writeToFile(data){
    fs.writeFileSync(PATH,JSON.stringify({inventors:data}),null,' ');
}

module.exports = {getInventors, getInventor, pushInventor, updateInventor,deleteInventor};

