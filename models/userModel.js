import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter user name"],
    },
    email: {
      type: String,
      required: [true, "please enter email"],
      unique: [true, "email already taken"],
    },
    password: {
      type: String,
      required: [true, "please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
