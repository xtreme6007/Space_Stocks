const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  DailyStocks: {
    date: {type: Date, required: true},
    ticker: {type: String},
    open: { type: Float, required: false },
    close: { type: Float, required: false },
    rsi: { type: Float, required: false }

   },

  
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;