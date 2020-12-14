const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({

    date: {type: Date, default: Date.now },
    stock:[{
      ticker: {type: String},
      RSI: {},
      recomended: {type: String}
      
    }]

 
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;