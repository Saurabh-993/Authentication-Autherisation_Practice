import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); //just to resolve the path as dotenv always by default read the .env from the root folder here it is backend so it is not finding it.

dotenv.config({ path: path.resolve("../../.env") }); //it is just loading the values of env files into this folder.
// dotenv.config({ path: "../../.env" }); //Note: you can normally do this without the path __filename stuffs but above one method is safe&Better.

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  connectionString: process.env.DB_URL,
};
