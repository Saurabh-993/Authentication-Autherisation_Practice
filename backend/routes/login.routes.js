import mongoose from "mongoose";
import express from "express";
import { loginChecker } from "../middlewares/authenticator.js";
import credential from "../Models/email_pass.js";

const router = express.Router();

router.get("/login", async (req, res) => {
  res.render("login");
});

router.post("/login", loginChecker, async (req, res) => {
  const { email, password } = req.body;
  const reqemail = await credential.findOne({ email: email });
  if (reqemail.password == password) {
    return res.render("greet");
  }
  return res.send("wrong password");
});

export default router;
