import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://jero:tp2@tp2-2021.kxpax.mongodb.net/TP2-2021?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = await client.db("sample_tp2_jero").collection("inventors").find().toArray();
  console.log(collection);
  // perform actions on the collection object
  client.close();
});
