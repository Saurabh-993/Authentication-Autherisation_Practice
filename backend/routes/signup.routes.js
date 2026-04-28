import express from "express";
import mongoose from "mongoose";
import credential from "../Models/email_pass.js";
import { signupChecker } from "../middlewares/authenticator.js";
import cookieChecker from "../middlewares/cookiechecker.js";
import cookieGenerator from "../middlewares/cookiemaker.js";
import signupGetController from "../controllers/singup.get.controller.js";
import signupPostController from "../controllers/signup.post.controller.js";

const router = express.Router();

router.get("/signup", cookieChecker, signupGetController);

router.post("/signup", signupChecker, cookieGenerator, signupPostController);

export default router;
