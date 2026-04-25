import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); //just to resolve the path as dotenv always by default read the .env from the root folder here it is backend so it is not finding it.

dotenv.config({ path: path.resolve(__dirname, "../../.env") }); //it is just loading the values of env files into this folder.
// dotenv.config({ path: "../../.env" }); //Note: you can normally do this without the path __filename stuffs but above one method is safe&Better.
const env = {
  PORT: Number(process.env.PORT) || 3000,
  connectionString: process.env.DB_URL,
};

export default env;
//ye jo path.resolve h ye humesha current working directory se measure karta h jo code run krte time check kar lena aap kiss directory mai ho
//so note that's why we have to give teh __dirname as it tell it that don't take the relative path with current working directory but use the path
//from the __dirname as even if you will call it from another files it will always check the path from the this file __dirname ../../.env
