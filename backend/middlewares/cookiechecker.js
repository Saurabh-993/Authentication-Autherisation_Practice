import express from "express";
import cookieGenerator, { mapper } from "./cookiemaker.js";

export default async function cookieChecker(req, res, next) {
  const cookie = req.cookies.key;
  if (mapper.get(cookie)) {
    return res.redirect("/greet");
  }
  next();
}
