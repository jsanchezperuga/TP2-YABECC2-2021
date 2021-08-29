// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object

// NUMBER
let var1 = 0;
console.log(typeof var1);

// Undefined
let nodenifida;
//nodenifida = 10;
console.log(nodenifida);

// Null 
let nulo = 45;
nulo = null;
console.log(typeof nulo);

// STRING
let saludo = 'Hola mundo ';
let caracter = 'c';
let pizza = '🍕';

console.log(saludo + "quiero una " + pizza);
// backtik
console.log(`${saludo} quiero una ${pizza}`);

// crear un objeto
//JSON = Javascript Object Notation
let actor = {
    nombre: 'Julia Roberts',
    age: 47
}

console.log(`Nombre: ${actor.name}`);
console.log(`Nombre: ${actor['age']}`);
console.log(`Nombre: ${actor}`);

