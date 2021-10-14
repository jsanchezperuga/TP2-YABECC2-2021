const fs = require('fs');
// const data = fs.readFileSync('../text.txt','utf-8');
const inventorData = require('./CRUDinventor');
// console.log(data);
console.log(inventorData.getInventor(4));
