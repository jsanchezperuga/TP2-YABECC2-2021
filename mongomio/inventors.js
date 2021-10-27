import { ObjectId } from 'bson';
import {getConnection} from './connection.js';

const DB = "sample_tp2_jero";
const COLLECTION_INVENTORS = "inventors";

async function getInventors(){
    const clientMongo = await getConnection();
    const inventors = clientMongo //
        .db(DB)
        .collection(COLLECTION_INVENTORS)
        .find()
        .toArray();
    return inventors;
}

async function getInventor(id){
    const clientMongo = await getConnection();
    const inventor = clientMongo
        .db(DB)
        .collection(COLLECTION_INVENTORS)
        .findOne({_id: new ObjectId(id)})//el filter que se pasa acá es un objeto de tipo ObjectId
    return inventor;
}

async function addInventor(inventor){
    const clientMongo = await getConnection();
    const result = clientMongo
        .db(DB)
        .collection(COLLECTION_INVENTORS)
        .insertOne(inventor);
    return result;
}

async function updateInventor(inventor){
    const clientMongo = await getConnection();
    const query = {_id:new ObjectId(inventor._id)}
    const newValues = {
        $set:{
            first : inventor.first,
            last : inventor.last,
            year : inventor.year
        }
    };

    const result = clientMongo.db(DB)
        .collection(COLLECTION_INVENTORS)
        .updateOne(query,newValues);
    return result;
}
async function deleteInventor(id){
    const clientMongo = await getConnection();
    const result = clientMongo
        .db(DB)
        .collection(COLLECTION_INVENTORS)
        .deleteOne({_id : new ObjectId(id)});   
    return result;
}

export {getInventors,getInventor, addInventor, updateInventor,deleteInventor};