import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB;
const DB = "sample_tp2_jero";
const COLLECTION_INVENTORS = "inventors";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let instance =null;
async function getConnection(){
  if(instance==null){
    try{
      instance = client.connect(); //y este método connect de dónde salió?
    }catch(error){
      console.log(error.message);
      throw new Error("Error en la conexión a ");
    }
    return instance;
  }
}

export {getConnection}

// client.connect(async err => {
//   const collection = await client.db("sample_tp2_jero").collection("inventors").find().toArray();
//   console.log(collection);
//   // perform actions on the collection object
//   client.close();
// });
