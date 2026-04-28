import express from "express";
import credential from "../Models/email_pass.js";

export default async function loginPostController(req, res) {
  const { email, password } = req.body;
  const reqemail = await credential.findOne({ email: email });
  if (reqemail.password == password) {
    return res.redirect("/greet");
  }
  return res.send("wrong password");
}
