var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "id": 1,
      "make": "Toyota",
      "model": "Corolla",
      "year": 2022,
      "color": "White",
      "price": 22000
    },
    {
      "id": 2,
      "make": "Honda",
      "model": "Civic",
      "year": 2023,
      "color": "Black",
      "price": 25000
    },
    {
      "id": 3,
      "make": "Ford",
      "model": "Mustang",
      "year": 2021,
      "color": "Red",
      "price": 40000
    },
    {
      "id": 4,
      "make": "Chevrolet",
      "model": "Camaro",
      "year": 2020,
      "color": "Blue",
      "price": 38000
    },
    {
      "id": 5,
      "make": "BMW",
      "model": "3 Series",
      "year": 2023,
      "color": "Silver",
      "price": 45000
    },
    {
      "id": 6,
      "make": "Mercedes-Benz",
      "model": "C-Class",
      "year": 2022,
      "color": "Gray",
      "price": 48000
    },
    {
      "id": 7,
      "make": "Audi",
      "model": "A4",
      "year": 2023,
      "color": "Black",
      "price": 46000
    },
    {
      "id": 8,
      "make": "Tesla",
      "model": "Model 3",
      "year": 2023,
      "color": "White",
      "price": 50000
    },
    {
      "id": 9,
      "make": "Nissan",
      "model": "Altima",
      "year": 2021,
      "color": "Blue",
      "price": 24000
    },
    {
      "id": 10,
      "make": "Hyundai",
      "model": "Elantra",
      "year": 2022,
      "color": "Gray",
      "price": 21000
    }
  ]
  );
});

module.exports = router;
