
setTimeout(()=>{
    console.log('Hola mundo despues de 4 segundos');
} , 4000);

let i = 0;
const timerid = setInterval(() => {
    console.log('Hola mundo: ' + i);
    i++;
    if(i===5) clearInterval(timerid);
}, 1000);

