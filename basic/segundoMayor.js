// Ejercicio
// Dado un array de numeros enteros positivos, determinar el segundo mayor

//esta primer aproximación está mal, porque encuentra el mayor solamente y me devuelve el mayor anterior
function segundoMayorPrimerIntento(numeros){
    let i=0;
    let numeroMayor = numeros[0];
    let segundoMayor;
    while(i<numeros.length){
        if(numeros[i]>numeroMayor){
            segundoMayor = numeroMayor;
            console.log('encontro un mayor, ' + numeroMayor);
            numeroMayor = numeros[i];
            console.log('es menor que, ' + numeroMayor);
        }
        i++;
    }
    return segundoMayor;
}
//esta sí anda, pero no me convence porque el profe dijo que se resuelve sin sort 
function segundoMayorConSort(numeros){
    let segundoMayor = null;

    if(numeros.length >1){
        numeros.sort();
        let i=numeros.length-2;
        while(i>=0){
            console.log(`Numero en pos ${i} es ${numeros[i]}`);
            console.log(`Numero en pos ${i+1} es ${numeros[i+1]}`);
            if(numeros[i] < numeros[i+1]){
                console.log(`Encontramos uno menor`);
                segundoMayor = numeros[i];
                break;
            }else{
                console.log(`No es menor`);
                i--;
            }
        }     
    }    
    return segundoMayor;
}   

//probemos sin sort

function segundoMayor(numeros){
    //encontrar el mayor con un for recorriendo todo el array
    //encontrar el mayor que no sea el que encontramos en la búsqueda anterior
    return numeros;
}
// //TEST TDD
console.log(segundoMayor([3,4,6,6,5,5]));
// console.log(segundoMayor([3,4,6,6,5,5])=== 5);
// console.log(segundoMayor([1,1,1,1]) === null);