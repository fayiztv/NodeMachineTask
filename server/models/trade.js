import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  type: { type: String, enum: ["buy", "sell"], required: true },
  user_id: { type: Number, required: true },
  symbol: { type: String, required: true },
  shares: { type: Number, required: true, min: 1, max: 100 },
  price: { type: Number, required: true },
  timestamp: { type: Number, required: true },
});

const TradeModel = mongoose.model("Trade", schema);
export default TradeModel;
