import express from "express";
import env from "./env/config.js";

const app = express();

function runServer() {
  //Note:- If you will not wrap in under a function than it will not run according to the flow
  app.listen(env.PORT, () =>
    console.log(`The server is Started at PORT:${env.PORT}`),
  );
}
export default runServer;
