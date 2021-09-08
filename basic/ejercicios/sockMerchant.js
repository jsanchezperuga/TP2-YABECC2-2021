/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks){
   colorSocks.sort();
   let count = 0;
   for(let i = 0; i < colorSocks.length-1; i++){
       if(colorSocks[i] === colorSocks[i+1]){
            count++;
            i++;
            //[1, 1, 1, 2,2, 2, 3]
       }
   }
   return count;
}
//mi aproximación (menos eficiente) es ordenar y luego contar desde el principio y contar cuántas medias iguales consecutivas hay, se divide ese número por dos y se trunca el resultado, ese el número de pares de ese talle, y se continúa de la misma manera hasta el final del array acumulando la cantidad de pares encontrados
const sockMerchantJSP = function(colorSocks){
    colorSocks.sort();
    let count = 0;
    let pares =0;
    for(let i = 0; i < colorSocks.length-1; i++){
        count++;
        console.log(`Media nro ${i} es ${colorSocks[i]}`);
        if(colorSocks[i] != colorSocks[i+1]){
            console.log(`Encontramos una diferente, ${i+1} es ${colorSocks[i+1]}`);
            pares +=  Math.trunc(count / 2);
            console.log(`Van ${count} medias, es decir ${pares} pares`);
            count = 0;
        }
    }
    console.log(`Terminó la lista de medias, se encontraron ${pares} pares.`);
    return pares;
 }
 
// TESTS TDD
console.log(sockMerchantJSP([1,2,1,2,1,3,2]) === 2);
console.log(sockMerchantJSP([10,20,20,10,10,30,50,10,20]) === 3);
//console.log(sockMerchant([10,20,20,10,10,30,50,10,20,20])

