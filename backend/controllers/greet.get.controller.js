import express from "express";

export default async function greetGetController(req, res) {
  res.render("greet");
}
