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

// token = abc123 

app.use('/', (req, res, next) =>{
    console.log('validando');
    if(req.query.token == 'abc123'){        
        next();
    } else {
        res.status(401).send('desautorizado');
    }
});

app.get('/', (req, res)=>{
    res.send('Home de api');
});

app.get('/api/inventors', (req, res)=>{
    res.json(inventors);    
    res.end();
});

app.listen(PORT, ()=> {
    console.log(`Servidor web escuchando el puerto ${PORT}`);
});