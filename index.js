import mongoose from "mongoose";
import express from "express";
import connect from "./backend/connectionDB.js";
import runServer from "./backend/app.js";

await connect();

runServer();
