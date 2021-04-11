import mongoose from "mongoose";

const saveStockSchema = mongoose.Schema({
  Name: String,
  type: String,
  Symbol: String,
  "Market Cap": String,
  "Net Change": String,
});

const SavedStock = mongoose.model("SavedStock", saveStockSchema);

export default SavedStock;
