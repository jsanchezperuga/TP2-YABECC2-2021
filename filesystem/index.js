const fs = require('fs');
const InventorData = require('./inventor');

//const data = fs.readFileSync('./text.txt','utf-8');

//console.log(data);

console.log(InventorData.getInventor(6));

