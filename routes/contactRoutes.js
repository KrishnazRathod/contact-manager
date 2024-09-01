import express from "express";
import {
  createContact,
  deleteContact,
  getAllContact,
  getContact,
  updateContact,
} from "./controller/contactController.js";
import { validateToken } from "../middlware/validateTokenHandler.js";

const router = express.Router();

router.use(validateToken);
router
  .get("/", getAllContact)
  .post("/", createContact)
  .get("/:id", getContact)
  .put("/:id", updateContact)
  .delete("/:id", deleteContact);

export default router;
