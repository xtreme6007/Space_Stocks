const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  DailyStocks: {
    date: {type: Date, required: true},
    stock:[]

  }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;