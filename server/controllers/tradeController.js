import TradeModel from "../models/trade.js";

let nextId = 1;

export async function createTrade(req, res) {
  try {
    const { type, user_id, symbol, shares, price, timestamp } = req.body;
    const trade = new TradeModel({
      id: nextId++,
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp,
    });
    await trade.save();
    res.status(201).json(trade);
  } catch (err) {
    res.status(400).send("Invalid trade data");
  }
}


