import mongoose from "mongoose";
import express from "express";
import { v4 as uuidv4, v4 } from "uuid";

export async function cookieauthentication(req, res, next) {
  const keyemail = req.body.email;
  const authvalue = v4();
  const internalmapper = new Map(keyemail, authvalue);
  if (!req.cookie) {
    res.cookie(authvalue);
    return res.next();
  } else {
    const usercookie = req.cookie;
    if (internalmapper.get(keyemail) == usercookie) {
      return res.next();
    }
  }
  return res.redirect("/signup");
}

const token = v4();
const mapper = new Map(usermail, token);

export async function cookieauthentications(req, res, next) {
  if (req.cookie) {
    const authenticatingcookie = mapper.get(req.body.usermail);
    if (authenticatingcookie == req.cookie) {
      return next();
    }
  }
  cookiegenerator();
  return next();
}

export async function cookiegenerator(req, res) {
  const usermail = req.body.email;

  return res.cookie(req.body.username, mapper.get(usermail));
}
