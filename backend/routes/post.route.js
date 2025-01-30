import express from "express";
import { deletePost, updatePost, createPost, getPosts } from '../controllers/post.controller.js';

const router = express.Router();

//
//  ENDPOINTS
//
router.get("/", getPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;