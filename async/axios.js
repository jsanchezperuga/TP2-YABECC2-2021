import axios from 'axios';

// axios.request('http://fakeapi.jsonparseronline.com/users1').then(value =>{
//     console.log(value);
// }).catch(causa => {
//     console.log(causa.message);
// });

// async function getUsers(){
//     return axios.request('http://fakeapi.jsonparseronline.com/users');
// }

let users = await axios.request('http://fakeapi.jsonparseronline.com/users');  

console.log(users);