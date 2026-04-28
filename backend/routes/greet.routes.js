import express from "express";

const router = express.Router();

router.get("/greet", async function (req, res) {
  res.render("greet");
});

export default router;
// If you want to put an authenticator here in greet than you have to make a different middleware than it
