const fs = require('fs');
// const data = fs.readFileSync('../text.txt','utf-8');
const inventorData = require('./CRUDinventor');
// console.log(data);
//console.log(inventorData.getInventor(4));

const newInventor = {
    "_id": 11,
   "first": "Carmela",
   "last": "Sanchez",
   "year": 2015
}

//inventorData.pushInventor(newInventor);

//inventorData.updateInventor(9,newInventor);


inventorData.deleteInventor(8);

console.log(inventorData.getInventors());