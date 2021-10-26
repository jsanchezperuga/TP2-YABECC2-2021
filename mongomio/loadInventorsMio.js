db = db.getSiblingDB('sample_tp2_jero');
db.inventors.drop();
db.inventors.insertMany(
    [{
        "first": "Albert",
        "last": "Einstein",
        "year": 1879
       },
       {
        "first": "Isaac",
        "last": "Newton",
        "year": 1643
       },
       {
        "first": "Galileo",
        "last": "Galilei",
        "year": 1564
       },
       {
        "first": "Marie",
        "last": "Curie",
        "year": 1867
       },
       {
        "first": "Johannes",
        "last": "Kepler",
        "year": 1571
       },
       {
        "first": "Nicolaus",
        "last": "Copernicus",
        "year": 1473
       },
       {
        "first": "Max",
        "last": "Planck",
        "year": 1858
       },
       {
        "first": "pablo",
        "last": "fernandez",
        "year": 1879
       },
       {
        "first": "Juan",
        "last": "Peres",
        "year": 1879
       }]
);