import express from "express";
import { logout } from "../middlewares/cookiemaker.js";

const router = express.Router();

router.get("/greet", async function (req, res) {
  res.render("greet");
});

router.post("/greet", logout, async (req, res) => {
  res.redirect("/signup");
});

export default router;
// If you want to put an authenticator here in greet than you have to make a different middleware than it
