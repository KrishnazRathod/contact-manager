import express from "express";
import {
  currentUser,
  userLogin,
  userRegister,
} from "./controller/userController.js";
import { validateToken } from "../middlware/validateTokenHandler.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/current", validateToken, currentUser);

export default router;
