const { Schema, mongoose } = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ProductSchema = new mongoose.Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "sellers",
    },
    name: {
      type: String,
      required: true,
    },
    color: [{
      type: String,
      required: true,
    }],
    category: [{
      type: String,
      required: true,
    }],
    sizes: {
      type: ["xs", "s", "m", "l", "xl", "xxl", "unspecified"],
      default: "unspecified",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      url: {
        type: String,
        require: true,
      },
      filename: {
        type: String,
        require: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

ProductSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("products", ProductSchema);
