import express from "express" 
import { createTrade, getAllTrades, getTradeById, handleNotAllowed } from "../controllers/tradeController.js";
const router = express.Router();

router.post('/trades', createTrade);
router.get('/trades', getAllTrades);
router.get('/trades/:id', getTradeById);
router.all('/trades/:id', handleNotAllowed);

export default router;
