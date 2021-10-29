
import http from 'http'
const inventors = [
    {
        "_id": 1,
        "first": "Albert",
        "last": "Einstein",
        "year": 1879
       },

       {
        "_id": 2,
        "first": "Isaac",
        "last": "Newton",
        "year": 1643
       },
       {
        "_id": 3,
        "first": "Galileo",
        "last": "Galilei",
        "year": 1564
       },
       {
        "_id": 4,
        "first": "Marie",
        "last": "Curie",
        "year": 1867
       },
       {
        "_id": 5,
        "first": "Johannes",
        "last": "Kepler",
        "year": 1571
       },

       {
        "_id": 6,
        "first": "Nicolaus",
        "last": "Copernicus",
        "year": 1473
       },
       {
        "_id": 7,
        "first": "Max",
        "last": "Planck",
        "year": 1858
       },
       {
        "_id": 8,
        "first": "pablo",
        "last": "fernandez",
        "year": 1879
       },
       {
        "_id": 10,
        "first": "Juan",
        "last": "Peres",
        "year": 1879
       } 
]



http.createServer((req,res)=>{
 switch (req.url) {
     case '/':
         res.write(200,{'Content-Type':'text/html'});
         res.write(`
            <html>
                <head></head>
                <body>
                    HOME DE API REST
                </body>
            </html>
         `)
         break;
    case '/api/inventors':
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(inventors, null, ' '));
     default:
         break;




 }
}).listen(3000,'localhost',()=>{
    console.log('Servidor web iniciado y escuchando puerto 3000');
})
