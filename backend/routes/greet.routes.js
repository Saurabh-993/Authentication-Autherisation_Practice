import express from "express";
import { logout } from "../middlewares/cookiemaker.js";
import greetGetController from "../controllers/greet.get.controller.js";
import greetPostController from "../controllers/greet.post.controller.js";
const router = express.Router();

router.get("/greet", greetGetController);
router.post("/greet", logout, greetPostController);

export default router;
// If you want to put an authenticator here in greet than you have to make a different middleware than it
