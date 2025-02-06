import express from "express";
import { deleteCardArray, updateCardArray, createCardArray, getCardArrays } from '../controllers/cardarray.controller.js';

const router = express.Router();

//
//  ENDPOINTS
//
router.get("/", getCardArrays);
router.post("/", createCardArray);
router.put("/:id", updateCardArray);
router.delete("/:id", deleteCardArray);

export default router;