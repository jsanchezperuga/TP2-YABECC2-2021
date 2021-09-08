/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];

  //1. acá hay que agregar una propiedad al objeto y usar un par de ifs para asignarles el valor correspondiente
  // cómo era la arrow function?
  // la arrow function se utiliza para callbacks anónimas
  //quedó feo pero anda, next!
  const setPrice = function(beersArray){
    beersArray.forEach(beer => {
      if(beer.name === 'Purple Iris'){
        beer.price = 320;
      }else{
        if(beer.abv<5.0){
          beer.price = 300;
        }else{
          beer.price = 350;
        }
      }
    }
  );
    return beers;
  }

  //2. acá se puede obtener el nombre del archivo con el método split  con / como separador y usando el último elemento del array resultante. Usé una función auxiliar fuera del método setFileName. 

  const setFileName = function(beersArray){
    beersArray.forEach(beer => {
      beer.file = ultimaParteLabel(beer.label);
    })
  }

  const ultimaParteLabel = function(label){
    let separado = label.split('/');
    return(separado[separado.length -1]);
  }

  //3. Implementación simple del método sort usando una función callback para establecer el criterio de ordenamiento (gracias StackOverflow.com)
  const ordenarPorTipo = function(beersArray){
    beers.sort((b1,b2) => b1.type > b2.type);
  }

//1.
//console.log(setPrice(beers));
//2. 
// setFileName(beers)
// console.log(beers);
//3
ordenarPorTipo(beers);
console.log(beers);


