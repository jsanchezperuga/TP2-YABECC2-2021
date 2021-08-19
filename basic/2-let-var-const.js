// var es la forma antigua de declarar variables

var variable1 = 45;

let x = 1;
//let x = 5;
if(x === 1){
    let x = 2;
    console.log(x);
}

console.log(x);

const key = 123;

const persona = {
    nombre: 'Pablo',
    edad: 45
}

persona.nombre = 'Pedro';
console.log(persona.nombre)

const cliente = Object.freeze(persona)
cliente.nombre = 'Juan';

console.log(cliente.nombre);
[2,4,5].array.forEach(element => {
    console.log(element);
});

//VOLVEMOS 9:34!!

