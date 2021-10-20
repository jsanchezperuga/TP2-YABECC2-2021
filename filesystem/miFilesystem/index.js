const fs = require('fs');
const { userInfo } = require('os');
// const data = fs.readFileSync('../text.txt','utf-8');
//const inventorData = require('./CRUDinventor');
const userData = require('./CRUDuser');
// console.log(data);
//console.log(inventorData.getInventor(4));

// const newInventor = {
//     "_id": 11,
//    "first": "Carmela",
//    "last": "Sanchez",
//    "year": 2015
// }

//inventorData.pushInventor(newInventor);

//inventorData.updateInventor(9,newInventor);


// inventorData.deleteInventor(8);

// console.log(inventorData.getInventors());


// "_id": "59b99e08cfa9a34dcd788669",
// "name": "Donna Smith",
// "email": "donna_smith@fakegmail.com",
// "password": "$2b$12$LYIyq5Bsszh3/8efEYmJRuWDqhOeg8K5czQwSLxEBhOTyhOX34JEy"

const newUser = {
    "_id": "59b99e08cfa9a34dcd788669",
    "name": "La donna",
    "email": "donna_smith@fakegmail.com",
    "password": "1234"
   }

   

   //console.log(userData.pushUser(newUser));
//    userData.updateUser("59b99e08cfa9a34dcd788669",newUser);
//    console.log(userData.getUserByEmail("donna_smith@fakegmail.com"));

let eliminado = userData.deleteUser("59b99e08cfa9a34dcd788669");
console.log(eliminado);