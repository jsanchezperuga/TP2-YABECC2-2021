/**
 *  Una cárcel tiene varios prisioneros y varios caramelos para distribuirles.
    Su carcelero decide que la forma más justa de dividir las golosinas es sentar a los prisioneros alrededor de una mesa circular en sillas numeradas secuencialmente.
    Se sacará un número de silla de un sombrero. Comenzando con el prisionero en esa silla, se entregará un caramelo a cada prisionero secuencialmente alrededor de la mesa hasta que todos hayan sido distribuidos.
    Sin embargo, el carcelero está jugando una "pequeña" broma. El último golosina se parece a todos los demás, pero tiene veneno.
    Determine el número de silla ocupado por el prisionero que recibirá ese caramelo.
    Desarrolle la funcion saveThePrisoner que devuelva el numero de prisionero que recibe la ultima golosina.
 */

/**
 * 
 * @param {Number} n numero total de prisioneros
 * @param {Number} m numero total de golosinas
 * @param {Number} s el numero de silla por donde se empieza
 * @return el numero de prisionero que recibe la ultima golosina
 */

//primer intento malísimo, ni me puse a mirar qué es lo que está mal
// const saveThePrisoner = function(n,m,s){
//       console.log(`Prisioneros: ${n} Caramelos: ${m} Silla: ${s}`);
//       while(m>1){
//          s++;
//          if(s===n){
//             s=1;
//          }
//          m--;
//       }
//       return s;
// }

/*segundo intento luego de mucho dibujito en papel
. Comencé aplicando el módulo de la cantidad de caramelos y la cantidad de presos, de esa manera me ahorro las iteraciones y el módulo representa la cantidad de caramelos de la última ronda
. después de mucho ensayo, encontré la relación entre el módulo, la silla de inicio y la silla del último caramelo: silla de inicio + módulo -1 es igual a la última silla.
. entonces le sumo a la silla de inicio el módulo (le resto uno porque el caramelo de esa silla ya fue contado) y si el número resultante es mayor a la cantidad de prisioneros le resto esa cantidad para que empiece a contar desde el principio y el resultado es el nro de silla del último caramelo.
*/
const saveThePrisoner = function(n,m,s){
 return (s += m%n -1) > n ? s-=n : s; 
}


// TEST TDD
console.log(saveThePrisoner(5,2,1) === 2);
console.log(saveThePrisoner(7,19,2) === 6);
console.log(saveThePrisoner(3,7,3) === 3);