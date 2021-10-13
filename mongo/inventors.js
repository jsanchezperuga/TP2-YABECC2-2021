import { ObjectId } from 'bson';
import {getConnection} from './connection.js';

const DB_TP = "sample_tp2";
const COLLECTION_INVENTORS = "inventors";

async function getInventors(){
    const clientmongo = await getConnection();
    const inventors = clientmongo
            .db(DB_TP)
            .collection(COLLECTION_INVENTORS)
            .find()
            .toArray();
    return inventors;
}

async function getInventor(id){
    const clientemongo = await getConnection();
    const inventor = clientemongo
            .db(DB_TP)
            .collection(COLLECTION_INVENTORS)
            .findOne({_id: new ObjectId(id)});
    return inventor;
}

async function addInventor(inventor){
    const clientmongo = await getConnection();
    const result = clientmongo.db(DB_TP)
                .collection(COLLECTION_INVENTORS)
                .insertOne(inventor);
    return result;
}

async function updateInventor(inventor){
    const clientmongo = await getConnection();
    const query = {_id: new ObjectId(inventor._id)};
    const newValues = {
        $set:{
            first : inventor.first,
            last: inventor.last,
            year: inventor.year
        }
    };

    const result = clientmongo.db(DB_TP)
                    .collection(COLLECTION_INVENTORS)
                    .updateOne(query, newValues);
    return result;
}

async function deleteInventor(id){
    const clientmongo = await getConnection();
    const result = await clientmongo.db(DB_TP)
                .collection(COLLECTION_INVENTORS)
                .deleteOne({_id: new ObjectId(id)});
    return result;
}

export {getInventors, getInventor, addInventor, updateInventor, deleteInventor }