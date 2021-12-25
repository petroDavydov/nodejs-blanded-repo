const { Schema, model } = require("mongoose");

const bookSchema = Schema(
  {
    author: {
      type: String,
      required: [true, "Please add a name of author"],
      trim: true,
      maxLength: [20, "Max mark equal 20 symbols"],
    },
    title: {
      type: String,
      required: [true, "Please add Title of book"],
      trim: true,
      maxLength: [20, "Limit 20"],
    },
    pages: {
      type: Number,
      min: [1, "Minimum 1 pages"],
      max: [1000, "Max 1000 pages"],
    },
    link: {
      type: String,
    },

    year: {
      type: Number,
      min: [1800, "Minimum 1800 year"],
      max: [2021, "Max 2021 year"],
    },
    language: {
      type: String,
      enum: ["en", "ua", "ru"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("book", bookSchema);
