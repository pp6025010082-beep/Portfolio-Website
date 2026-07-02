import jwt from "jsonwebtoken";

export function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Authentication required." });
  }

  try {
    jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired session. Please log in again." });
  }
}
