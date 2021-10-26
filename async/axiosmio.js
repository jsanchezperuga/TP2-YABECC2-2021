import  axios from 'axios'

// axios.request ('http://fakeapi.jsonparseronline.com/users').then((value)=>{
// escribir(value.status)
// }).catch(err=>{escribir(err.message)
// });

// function escribir(val)
// {console.log(val);}

async function getUsers(){
    let users = axios.request ('http://fakeapi.jsonparseronline.com/users');
    return users;
}

console.log(await getUsers());