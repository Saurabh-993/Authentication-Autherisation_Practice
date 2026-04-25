import env from "./env/config.js";
import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(env.connectionString);
    console.log(
      `The connection with the database is stabilished on the PORT:27017`,
    );
  } catch (error) {
    console.log("Unable to Connect with Database");
  }
}
