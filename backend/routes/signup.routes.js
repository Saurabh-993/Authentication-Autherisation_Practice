import express from "express";
import mongoose from "mongoose";
import credential from "../Models/email_pass.js";
import { signupChecker } from "../middlewares/authenticator.js";

const router = express.Router();

router.get("/signup", async (req, res) => {
  res.cookie("name", "bagadbilla");
  res.render("signup");
});

router.post("/signup", signupChecker, async (req, res) => {
  const { username, email, password } = req.body;
  await credential.create({
    username: username,
    email: email,
    password: password,
  });
  res.render("login");
});

export default router;
