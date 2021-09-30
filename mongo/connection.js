//const { MongoClient } = require('mongodb');
import {MongoClient} from 'mongodb';

// TODO: llevar a variables de entorno.
//const uri = "mongodb+srv://admin:tp2@cluster0.3bm3a.azure.mongodb.net/sample_tp2?retryWrites=true&w=majority";
const DB_TP = "sample_tp2";
//const COLLECTION_INVENTORS = "inventors1111";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// TODO: Controlar que se utilice solo una conexión, se prodria hacer un singlenton
async function getConnection(){
    let instance = null;
    try {
        instance = client.connect();
    } catch (error) {
        console.error(error.message);
        throw new Error('Error al conectarse con sample_tp2');
    }
    return instance;
}
// client.connect(async err => {
//     const inventors = await client
//         .db("sample_tp2")
//         .collection("inventors")
//         .find()
//         .toArray();
//     console.log(inventors);
//   // perform actions on the collection object
//     client.close();
// });

export {getConnection}