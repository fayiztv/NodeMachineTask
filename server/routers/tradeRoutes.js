import express from "express" 
import { createTrade } from "../controllers/tradeController.js";
const router = express.Router();

router.post('/trades', createTrade);


export default router;
