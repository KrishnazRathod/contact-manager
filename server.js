import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "success" });
});

app.listen(port, () => {
  console.log("PORT", port);
});
