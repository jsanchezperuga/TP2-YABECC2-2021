import http from 'http'

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(inventors, null, ' '));
    res.end();
}).listen(3000,'localhost',()=>{
    console.log('Servidor web iniciado y escuchando puerto 3000');
})
