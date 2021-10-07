//const { MongoClient } = require('mongodb');
import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB;
const DB_TP = "sample_tp2";
//const COLLECTION_INVENTORS = "inventors1111";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let instance = null;
async function getConnection(){
    if(instance == null){
        try {
            instance = client.connect();
        } catch (error) {
            console.error(error.message);
            throw new Error('Error al conectarse con sample_tp2');
        }
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