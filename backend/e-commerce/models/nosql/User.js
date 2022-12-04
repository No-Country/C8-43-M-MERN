const { Schema, mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: ["user", "seller"],
      default: "user",
    },
    profileimage: {
      url: {
        type: String,
        required: true,
        default:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      },
      filename: {
        type: String,
        default: "defaultimage"
      },
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
    sex: {
      type: ["female", "male", "unspecified"],
      default: "unspecified",
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "UNVERIFIED",
    },
    favorites: [{
      type: Schema.Types.ObjectId,
      ref: "products",
    }],
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("users", UserSchema);
