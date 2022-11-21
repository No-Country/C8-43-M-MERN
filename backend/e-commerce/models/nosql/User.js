const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: ["user", "seller"],
      default: "user",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      min: "2004-11-17",
      default: Date.now,
      required: true,
    },
    sex: {
      type: ["female", "male", "unspecified"],
      default: "unspecified",
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "UNVERIFIED"
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("users", UserSchema);
