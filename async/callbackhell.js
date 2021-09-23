// UTILIZANDO LECTURA ASYNCRONA (NO SE DEBE UTILIZAR LOS METODOS fs.readFileSync)

// 1.- Leer el archivo inventors.json
// 2.- Insertar un nuevo inventor, escribir el archivo
// 3.- Leer nuevamente el archivo, con el nuevo inventor
// 4.- eliminar el inventor que inserté, escribir el archivo
// 5.- Leer nuevamente el archivo, sin el inventor

import fs from 'fs';
const PATH = './inventors.json';

// 1.-
fs.readFile(PATH, 'utf-8', (err, data) => {
  if(!err){
    let inventors = JSON.parse(data);
    let inventor = {
      "_id": 10,
      "first": "Juan",
      "last": "Peres",
      "year": 1879
     }
    // 2.- 
     inventors.push(inventor);
     fs.writeFile(PATH, JSON.stringify(inventors, null, ' '), (err) => {
        if(!err) {
          fs.readFile(PATH, 'utf-8', (err, data) => {
            if(!err){
              let inventors = JSON.parse(data);
              console.log(inventors);
            }
            else {
              console.log(err);
            }
          });
        } else {
          console.log(err);
        }
     });     
  } else {
    console.log(err);
  }
});
