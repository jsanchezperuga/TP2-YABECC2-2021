import fs from 'fs/promises';

async function getInventors(){
    return await fs.readFile();
}

async function pushInventor(){

}

// 1.- 

await getInventors();
pushInventor();



