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

    fs.writeFileSync(PATH,JSON.stringify(dataInventors),);
}

function updateInventor(id, inventor){

}

function deleteInventor(id){

}

module.exports = {getInventors, getInventor, pushInventor, updateInventor,deleteInventor};

