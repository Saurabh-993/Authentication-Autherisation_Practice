import mongoose from "mongoose";
import express from "express";
import { loginChecker } from "../middlewares/authenticator.js";
import credential from "../Models/email_pass.js";
import cookieChecker from "../middlewares/cookiechecker.js";
import cookieGenerator from "../middlewares/cookiemaker.js";
import loginGetController from "../controllers/login.get.controller.js";
import loginPostController from "../controllers/login.post.controller.js";

const router = express.Router();

router.get("/login", cookieChecker, loginGetController);

router.post("/login", loginChecker, cookieGenerator, loginPostController);

export default router;
