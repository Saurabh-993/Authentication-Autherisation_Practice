import express from "express";
import mongoose from "mongoose";
import credential from "../Models/email_pass.js";
const router = express.Router();

export async function signupChecker(req, res, next) {
  const email = req.body.email;
  const emailchecker = await credential.findOne({ email: email });
  if (emailchecker) {
    return res.redirect("/login");
  }
  next();
}

export async function loginChecker(req, res, next) {
  const email = req.body.email;
  const emailchecker = await credential.findOne({ email: email });
  if (!emailchecker) {
    return res.redirect("/signup");
  }
  next();
}
