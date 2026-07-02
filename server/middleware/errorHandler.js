export function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  console.error(err);

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((fieldError) => fieldError.message);
    return res.status(400).json({ message: messages[0] || "Invalid data.", errors: messages });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  const status = err.status || 500;
  const message = status === 500 ? "Internal server error." : err.message;

  res.status(status).json({ message });
}
