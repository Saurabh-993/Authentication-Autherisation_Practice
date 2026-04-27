import mongoose from "mongoose";

const userCredential = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Put an username"],
    },
    email: {
      type: String,
      required: [true, "Please write an valid email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide an password"],
    },

  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const credential = mongoose.model("credential", userCredential);

export default credential;
