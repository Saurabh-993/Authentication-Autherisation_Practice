import express from "express";
import mongoose from "mongoose";
import credential from "../Models/email_pass.js";
import { signupChecker } from "../middlewares/authenticator.js";
import cookieChecker from "../middlewares/cookiechecker.js";
import cookieGenerator from "../middlewares/cookiemaker.js";

const router = express.Router();

router.get("/signup", cookieChecker, async (req, res) => {
  res.render("signup");
});

router.post("/signup", signupChecker, cookieGenerator, async (req, res) => {
  const { username, email, password } = req.body;
  await credential.create({
    username: username,
    email: email,
    password: password,
  });
  res.redirect("/greet");
});

export default router;
