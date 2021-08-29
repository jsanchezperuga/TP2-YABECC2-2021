// Ejercicio
// Dado un array de numeros enteros, multiplicar por 2 si es par y por 3 si es impar
// 
//basado en la resolución del ejercicio sockMerchant, usando un for

paresImparesMultip = function(numeros){
    for (let i = 0; i<numeros.length;i++){
        if(numeros[i]%2===0){
            numeros[i]*=2;
        }else{
            numeros[i]*=3;
        }
    }
    return numeros;
}

//a ver con un foreach

paresImparesForEach = function(numeros){
    //le paso al foreach argumentos para el elemento y el indice
    numeros.forEach((e,index) =>{
        if(e%2===0){
            // console.log(numeros[index] + ' es par');
            numeros[index]*=2;            
        }else{
            // console.log( numeros[index] + ' es impar');
            numeros[index]*=3;            
        }
    })
    return numeros;
}

//TESTS
//cómo comparar un return de un array con los valores esperados? Esto no anda...
// let res = [3,4]
// console.log(paresImparesMultip([1,2]) === res);
console.log(`Con for ${paresImparesMultip([1,2,3])}`);
console.log(`Con foreach ${paresImparesForEach([1,2,3])}`);

//por qué declarar una const con el nombre de la función y luego asignarle la function? Sin el const funciona igual.
//no se puede hacer con un forEach? es más eficiente con un for?

