const fs = require('fs');
const PATH =  '../data/users.json';

function getUsers(){
    return JSON.parse(fs.readFileSync(PATH,'utf-8'));
}

function getUser(id){
    return getUsers().find(u=>u._id ===id);
}

function getUserByEmail(email){
    return getUsers().find(u=>u.email ===email);
}

function pushUser(user){
    let users = getUsers();
    user._id = generateId();
    users.push(user);
    writeToFile(PATH, users);
    return getUser(user._id);
}

function generateId(){
    return Date.now().toString(16) + Math.random().toString(36).substring(2);
}

function updateUser(id,user){
    let dataUsers = getUsers();
    let i = getIndexById(id,dataUsers);
    if(i!=-1){
        dataUsers[i]=user;
        writeToFile(PATH,dataUsers);
    }else{
        console.log('No se encontró un registro con id ', id);
    }
}

function deleteUser(id){   
    let eliminado;
    let dataUsers = getUsers();
    let i = getIndexById(id,dataUsers);
    if(i!=-1){
        eliminado = dataUsers.splice(i,1);
        writeToFile(PATH,dataUsers);
    }else{
        console.log('No se encontró un registro con id ', id);
    }
    return eliminado;
}

function getIndexById(id,array){
    return array.findIndex((e)=>e._id===id);
}

function writeToFile(path, data){
    fs.writeFileSync(path,JSON.stringify(data,null,' '));
}

module.exports = {getUsers,getUser,getUserByEmail,pushUser,deleteUser,updateUser}