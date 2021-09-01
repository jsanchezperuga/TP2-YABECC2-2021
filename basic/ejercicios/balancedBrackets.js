/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * TIP: Utilizando pilas y colas de arrays
 * TIP: Utilizar cadenas y replace
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
// ((()))
const isValid = function(s){ 
    let aux = -1;
    let respuesta = 'YES';
    while (s.length !=0) {     
        aux = s.length;
        s = s.replace("()","");
        s = s.replace("[]","");
        s = s.replace("{}","");
        // puede reemplazar algo?
        if(aux === s.length){ 
            respuesta = 'NO';
            break;
        }
    }
    return respuesta;
};

// TESTS
console.log(isValid('()') === true);
console.log(isValid('([{}])') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);

// VOLVEMOS 9:36