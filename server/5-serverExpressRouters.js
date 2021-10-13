import express from 'express'

const PORT = 3000;
const app = express();

const inventors = [{
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
   }
  ];

app.get('/', (req, res)=>{
    res.send(`
        <html>
            <head></head>
            <body>
                Home de api rest con express
            </body>
        </html>
    `);
    res.end();
});

app.get('/api/inventors', (req, res)=>{
    //console.log(req.query.order);
    
    if(req.query.order){   
        const order = req.query.order;     
        res.json(inventors.sort((a,b)=> (a.order > b.order)? 1 : -1));
    } else {
        res.json(inventors);    
    }
    res.end();
});

// Me retorne un inventor determinado
// /api/inventors/8

app.get('/api/inventors/:id', (req, res)=>{
    const id = req.params.id;
    
    res.json(inventors.filter(inventor => inventor._id == parseInt(id)));    
});

app.listen(PORT, ()=> {
    console.log(`Servidor web ejecutandose en el puerto ${PORT}`);
});