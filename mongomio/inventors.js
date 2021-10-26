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

export {getInventors};