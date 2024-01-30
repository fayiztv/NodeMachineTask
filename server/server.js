import express from "express";
import dbConnect from "./database/connection.js";
import tradeRoutes from "./routers/tradeRoutes.js";

dbConnect();
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(tradeRoutes);
app.listen(3000, () => console.log(`Server running on port 3000`));
