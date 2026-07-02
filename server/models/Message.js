import mongoose from "mongoose";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [2, "Name must be at least 2 characters."],
      maxlength: [100, "Name must be under 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      match: [EMAIL_PATTERN, "Enter a valid email address."],
    },
    subject: {
      type: String,
      required: [true, "Subject is required."],
      trim: true,
      minlength: [3, "Subject must be at least 3 characters."],
      maxlength: [150, "Subject must be under 150 characters."],
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      minlength: [10, "Message must be at least 10 characters."],
      maxlength: [2000, "Message must be under 2000 characters."],
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: false } }
);

export default mongoose.model("Message", messageSchema);
