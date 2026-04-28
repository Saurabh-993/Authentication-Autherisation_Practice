import mongoose from "mongoose";
import express from "express";
import { loginChecker } from "../middlewares/authenticator.js";
import credential from "../Models/email_pass.js";
import cookieChecker from "../middlewares/cookiechecker.js";
import cookieGenerator from "../middlewares/cookiemaker.js";

const router = express.Router();

router.get("/login", cookieChecker, async (req, res) => {
  res.render("login");
});

router.post("/login", loginChecker, cookieGenerator, async (req, res) => {
  const { email, password } = req.body;
  const reqemail = await credential.findOne({ email: email });
  if (reqemail.password == password) {
    return res.redirect("/greet");
  }
  return res.send("wrong password");
});

export default router;
