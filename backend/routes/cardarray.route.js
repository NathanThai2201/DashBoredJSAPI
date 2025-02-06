import express from "express";
import { deleteCardArray, updateCardArray, createCardArray, getCardArrays, getCardArray } from '../controllers/cardarray.controller.js';

const router = express.Router();

//
//  ENDPOINTS
//
router.get("/", getCardArrays);
router.get("/:id", getCardArray);
router.post("/", createCardArray);
router.put("/:id", updateCardArray);
router.delete("/:id", deleteCardArray);

export default router;