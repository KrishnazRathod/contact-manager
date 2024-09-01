import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlware/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";

connectDb();

const app = express();

dotenv.config();

const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {});
