const { Schema, mongoose } = require("mongoose");

const SellerSchema = new mongoose.Schema(
  {
    role: {
      type: ["user", "seller"],
      default: "seller",
    },
    profileimage: {
      url: {
        type: String,
        required: true,
        default:
          "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
      },
      filename: {
        type: String,
        default: "defaultimage",
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
      default: "UNVERIFIED",
    },
    description: {
      type: String,
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: "Product",
    }]
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("sellers", SellerSchema);
