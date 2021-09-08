const fs = require('fs');
const InventorData = require('./inventor');
const UserData = require('./user');

//const data = fs.readFileSync('./text.txt','utf-8');

//console.log(data);

//console.log(InventorData.getInventor(6));

// const inventor = { "_id": 8, "first" : "pablo", "last": "fernandez", "year": 1879 };

// InventorData.pushInventor(inventor);

// console.log(InventorData.getInventors());

const user = {
    "name":"Juan Perez",
    "email":"juanperez@gameofthron.es",
    "password":"abc123"
}

console.log(UserData.pushUser(user));


