import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://jero:tp2@tp2-2021.kxpax.mongodb.net/TP2-2021?retryWrites=true&w=majority";
const DB = "sample_tp2_jero";
const COLLECTION_INVENTORS = "inventors";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getConnection(){
  let instance =null;
  try{
    instance = client.connect(); //y este método connect de dónde salió?
  }catch(error){
    console.log(error.message);
    throw new Error("Error en la conexión a ");
  }
  return instance;
}

// client.connect(async err => {
//   const collection = await client.db("sample_tp2_jero").collection("inventors").find().toArray();
//   console.log(collection);
//   // perform actions on the collection object
//   client.close();
// });
export {getConnection}