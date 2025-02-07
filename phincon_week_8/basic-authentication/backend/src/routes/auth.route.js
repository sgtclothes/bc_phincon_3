import express from "express";
const router = express.Router();
import { login, register, verifyEmail, forgotPassword, resetPassword } from "../controllers/auth.controller.js";

router.post("/login", login);
router.post("/register", register);
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
