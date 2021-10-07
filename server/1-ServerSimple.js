import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<l1>Hola mundo</l1>');
    res.end();
}).listen(3000, '127.0.0.1', () =>{
    console.log('Servidor web iniciado y escuchando el puerto 3000');
});