import express from "express";
import { deleteTypingText, updateTypingText, createTypingText, getTypingTexts } from '../controllers/typingtext.controller.js';

const router = express.Router();

//
//  ENDPOINTS
//
router.get("/", getTypingTexts);
router.post("/", createTypingText);
router.put("/:id", updateTypingText);
router.delete("/:id", deleteTypingText);

export default router;