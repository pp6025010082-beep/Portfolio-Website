import crypto from "crypto";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";

function safeCompare(a, b) {
  const bufferA = Buffer.from(String(a));
  const bufferB = Buffer.from(String(b));
  if (bufferA.length !== bufferB.length) return false;
  return crypto.timingSafeEqual(bufferA, bufferB);
}

export const login = asyncHandler(async (req, res) => {
  const { password } = req.body;

  if (!password || typeof password !== "string") {
    return res.status(400).json({ message: "Password is required." });
  }

  const isValid = safeCompare(password, process.env.ADMIN_PASSWORD || "");
  if (!isValid) {
    return res.status(401).json({ message: "Incorrect password." });
  }

  const token = jwt.sign({ role: "admin" }, process.env.ADMIN_JWT_SECRET, { expiresIn: "12h" });
  res.status(200).json({ token });
});
