const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  ticker: { type: String, required: true },
  open: { type: Float, required: true },
  close: { type: Float, required: true },
  rsi: { type: Float, required: true },
  sma: { type: Float, required: true },
  adx: { type: Float, required: true },
  williams: { type: Float, required: true },
  date: {type: Date, required: true}
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Book;