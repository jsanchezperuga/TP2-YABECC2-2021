import express from 'express'

const PORT = 3000;
const app = express();

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },    
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
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
    res.json(inventors);    
    res.end();
});

app.listen(PORT, ()=> {
    console.log(`Servidor web escuchando el puerto ${PORT}`);
});