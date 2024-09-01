import express from "express";
import {
  createContact,
  deleteContact,
  getAllContact,
  getContact,
  updateContact,
} from "./controller/contactController.js";

const router = express.Router();

router
  .get("/", getAllContact)
  .post("/", createContact)
  .get("/:id", getContact)
  .put("/:id", updateContact)
  .delete("/:id", deleteContact);

export default router;
