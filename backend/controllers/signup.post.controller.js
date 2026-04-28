import express from "express";
import credential from "../Models/email_pass.js";
export default async function signupPostController(req, res) {
  const { username, email, password } = req.body;
  await credential.create({
    username: username,
    email: email,
    password: password,
  });
  res.redirect("/greet");
}
