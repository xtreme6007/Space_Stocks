const Stock = require("../models/stocks.js");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    Stock
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByStock: function(req, res) {
    Stock
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    
    // let data = JSON.parse(req.body)
    let dailyStock = {stock: req.body}
    console.log(dailyStock)
      Stock
      .create(dailyStock)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Stock
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
