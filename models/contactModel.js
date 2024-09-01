import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add contact name"],
    },
    phone: {
      type: String,
      required: [true, "please add phone no. name"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("contact", contactSchema);
