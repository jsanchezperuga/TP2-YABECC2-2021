import { getInventors, getInventor, addInventor, updateInventor, deleteInventor } from "./inventors.js";

try {
    //console.log(await getInventors());
    //console.log(await getInventor('6153b0641a071df5278126ed'));
    // console.log(await addInventor({
    //         "first": "Pepe",
    //         "last": "Gutierrez",
    //         "year": 1879
    // }));
    // console.log(await updateInventor({
    //     _id: "6155087614a2dfea1336f666",
    //     first: "Pepe 2",
    //     last: "Gutierrez 2",
    //     year: 2000
    // }));
    console.log(await deleteInventor('6155087614a2dfea1336f666'));
} catch (error) {    
    console.log(error.message);
    console.log("error en el cliente");
}
