const { Schema, mongoose } = require("mongoose");

const ShoppingCartSchema = new mongoose.Schema(
  {
    order: [
      {
        name: {
          type: String,
          required: true,
        },
        color: {
          type: [String],
          required: true,
        },
        sizes: {
          type: [String],
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
          default: 1,
          min: 1
        },
        image: {
            type: String,
            require: true,
        },
      },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("shoppingcarts", ShoppingCartSchema);
