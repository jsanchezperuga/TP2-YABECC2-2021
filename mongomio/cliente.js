import {getInventors, getInventor, addInventor,updateInventor,deleteInventor} from './inventors.js';

try {
    //console.log(await getInventors());
    console.log(await getInventor('6177574341182125e83436b3'));
    // console.log(await addInventor(
    //     {
    //         "first": "Joseph",
    //         "last": "Piersonn",
    //         "year": 1999
    //     }
    // ));
    // console.log(await updateInventor({
    //     _id: "61788b5f8b8b5e1ead1e6461",
    //     first:"Juan",
    //     last:"Perón",
    //     year:1999
    // }));
    // console.log(await deleteInventor('61788b5f8b8b5e1ead1e6461'));
} catch (error) {
    console.log(error.message);
    console.log('error en el cliente');
}

