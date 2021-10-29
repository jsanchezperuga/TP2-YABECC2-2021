import express from 'express'
const PORT = 3000;
const app = express();

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


app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
            </head>
            <body>
                <h1>Home de la api inventors</h1>
            </body>
        </html>
    `)
});

app.get('/api/inventors',(req,res)=>{
    if(req.query.sort){
        const criteria = req.query.sort;
        console.log(criteria);
        res.json(inventors.sort((a,b) => a.criteria < b.criteria? 1:-1));
    }else{        
    res.json(inventors);
    }
    
});

app.get('/api/inventors/:clave',(req,res)=>{
    const clave = req.params.clave;
    res.json(inventors.filter(inventor => inventor._id == clave))
});

app.listen(PORT,()=>{
    console.log('Servidor iniciado.Puerto 3000');
});

