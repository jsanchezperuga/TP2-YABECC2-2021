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
    fs.writeFileSync(PATH,JSON.stringify({inventors:dataInventors}),null,' ');
}

function updateInventor(id, inventor){
    let dataInventors = getInventors();
    let i = dataInventors.findIndex((e)=>e._id===id);
    if(i){
        dataInventors[i]=inventor;
        fs.writeFileSync(PATH,JSON.stringify({inventors:dataInventors}),null,' ');
    }else{
        console.log('No se encontró un registro con id ', id);
    }
}

function deleteInventor(id){
    let data = getInventors();
    let newData = data.slice
}

module.exports = {getInventors, getInventor, pushInventor, updateInventor,deleteInventor};

