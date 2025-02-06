import express from "express";
import { deleteUser, updateUser, createUser, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

//
//  ENDPOINTS
//
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;