/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * 
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
const isValid = function(s){ 
    
};



// TESTS
console.log(isValid('()') === true);
console.log(isValid('([{}])') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);
