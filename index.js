import mongoose from "mongoose";
import express from "express";
import connect from "./backend/connectionDB.js";
import app, { runServer } from "./backend/app.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import signup from "./backend/routes/signup.routes.js";
import login from "./backend/routes/login.routes.js";
import greet from "./backend/routes/greet.routes.js";
import cookieParser from "cookie-parser";
//don't use app=express() here as we are importing it from the app.js and if you will create here one more than two different apps will be build where the runServer will be running on the app.js server, and all the requested are directed toward the app.js app not this one .

//for connecting with the database
await connect();

//language parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Path setting for the routes
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//setting up the path for the static files
app.use(express.static(path.join(__dirname, "./public")));

//Setting up our view engine Ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./backend/views"));

//routes executions
app.use("/", signup);
app.use("/", login);
app.use("/", greet);

//for running the express Server
runServer();
