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
    let inventors = getInventors();
    inventors.push(inventor);
    
    fs.writeFileSync(PATH, JSON.stringify({inventors:inventors}, null, ' '));
}

// Modificacion 
function updatIventor(id, inventor){
    //TODO: Se los dejo como ejercicio
    // findIndex
}

// Eliminacion
function deleteInventor(id){
    //TODO: Se los dejo como ejercicio
    // slice, filter
}

module.exports = {getInventor, getInventors, pushInventor, deleteInventor, updatIventor};

