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

export async function getAllTrades(req, res) {
  try {
    const { type, user_id } = req.query;
    let query = {};
    if (type) query.type = type;
    if (user_id) query.user_id = user_id;
    const trades = await TradeModel.find(query).sort("id");
    res.status(200).json(trades);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getTradeById(req, res) {
  try {
    const trade = await TradeModel.findOne({ id: req.params.id });
    if (!trade) return res.status(404).send("ID not found");
    res.status(200).json(trade);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function handleNotAllowed(req, res) {
  res.status(405).send("Method Not Allowed");
}
