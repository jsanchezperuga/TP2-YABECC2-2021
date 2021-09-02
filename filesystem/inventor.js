// CRUD de iventores
const fs = require('fs');
const PATH = './data/inventors.json';

// Lectura
function getInventors(){
    let data = fs.readFileSync(PATH, 'utf-8');
    let dataInventors = JSON.parse(data);
    return dataInventors.inventors;
}

function getInventor(id){
    return getInventors()
        .filter(inventor => inventor._id === id);
}

// Alta
function pushInventor(inventor){

}

// Modificacion 
function updatIventor(id, inventor){

}

// Eliminacion
function deleteInventor(id){

}

module.exports = {getInventor, getInventors, pushInventor, deleteInventor, updatIventor};

