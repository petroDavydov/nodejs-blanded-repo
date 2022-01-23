const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    firstName: {
      type: String,
      default: "John",
      trim: true,
      maxLength: [20, "Max mark equal 20 symbols"],
    },
    lastName: {
      default: "Doe",
      type: String,
      trim: true,
      maxLength: [20, "Limit 20"],
    },
    email: {
      type: String,
      required: [true, "Please add e-mail"],
      min: [1, "Minimum 1 symbol"],
      max: [1000, "Max 1000 symbols"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },

    role: {
      type: String,
      default: "USER",
    },
    token: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("user", userSchema);
