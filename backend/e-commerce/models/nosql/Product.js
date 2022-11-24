const { Schema, mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", ProductSchema, "products");
