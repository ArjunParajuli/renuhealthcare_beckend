import mongoose, { Schema } from "mongoose";

// Video Schema
const videoSchema = new Schema(
  {
    content: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
