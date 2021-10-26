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
    const inventor = clientMongo //
        .db(DB)
        .collection(COLLECTION_INVENTORS)
        .findOne({_id: new ObjectId()})//el filter que se pasa acá es un objeto de tipo ObjectId
    return inventor;
}

export {getInventors,getInventor};