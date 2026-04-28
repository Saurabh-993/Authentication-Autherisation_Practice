import mongoose from "mongoose";
import express from "express";
import { v4 as uuidv4, v4 } from "uuid";
import credential from "../Models/email_pass.js";

export const mapper = new Map();

export default async function cookieGenerator(req, res, next) {
  const email = req.body.email;
  const token = v4();
  mapper.set(token, email);
  res.cookie("key", token); //here we are not sending a response but editting the header of the response object so the req pipeline
  //  is still continue unlike render(),end(),send()&redirect()
  next();
}

// proper authentication
// logout button bhi bnana h
