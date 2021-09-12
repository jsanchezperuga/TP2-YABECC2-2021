const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },    
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  // Imprimir en formato tabular

  function printInventors(inventors){
      console.log('Nombre         Apellido      Año');
      console.log('--------------------------------');

      //inventors.forEach(printInventor);

    //   inventors.forEach(function(inventor){
    //     console.log(inventor.first + '     ' + inventor.last + '     ' + inventor.year);
    //   });

    inventors.forEach(inventor => 
        console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`)
    );    
  }

//   function printInventor(inventor){
//       console.log(inventor.first + '     ' + inventor.last + '     ' + inventor.year);
//   }

  //printInventors(inventors);

// Filtrar los inventores que nacieron despues del 1800
//printInventors(inventors.filter(inventor => inventor.year > 1800));
//   inventors.filter(function(inventor){        
//         return inventor.year > 1800;
//   });

// Convertir el apellido a todo mayuscula
printInventors(inventors
    .map(inventor => 
    (
        {
            first: inventor.first,
            last: inventor.last.toUpperCase(),
            year: inventor.year
        }
    ))
    .filter(inventor => inventor.year > 1800)
);

// Encontrar el inventor Kepler

// Si alguno de los inventores nacio en 1858

// Si todos los inventores nacieron despues del 1500

// Ordenar los inventores por fecha de nacimiento
//inventors.sort()
