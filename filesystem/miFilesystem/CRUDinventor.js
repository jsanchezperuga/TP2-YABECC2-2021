const fs = require('fs');
const PATH =  '../data/inventors.json';

function getInventors(){
    let file = fs.readFileSync(PATH,'utf-8');
    let data = JSON.parse(file);
    return data.inventors;
}

function getInventor(id){
     return getInventors
        .filter()
}

function pushInventor(inventor){

}

function updateInventor(id, inventor){

}

function deleteInventor(id){

}

module.exports = {getInventors, getInventor, pushInventor, updateInventor,deleteInventor};

