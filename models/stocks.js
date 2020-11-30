const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  ticker: { type: String, required: true },
  open: { type: Float, required: false },
  close: { type: Float, required: false },
  rsi: { type: Float, required: false },
  sma: { type: Float, required: false },
  adx: { type: Float, required: false },
  williams: { type: Float, required: false },
  date: {type: Date, required: true}
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;