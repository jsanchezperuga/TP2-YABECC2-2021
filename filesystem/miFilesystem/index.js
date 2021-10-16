const fs = require('fs');
// const data = fs.readFileSync('../text.txt','utf-8');
const inventorData = require('./CRUDinventor');
// console.log(data);
//console.log(inventorData.getInventor(4));

const newInventor = {
    "_id": 9,
   "first": "Fabiola",
   "last": "Marcial",
   "year": 1875
}

// inventorData.pushInventor(newInventor);

inventorData.updateInventor(9,newInventor);

console.log(inventorData.getInventors());