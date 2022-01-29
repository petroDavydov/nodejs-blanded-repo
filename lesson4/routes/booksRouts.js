const express = require("express");

const { getBooks,
  addBook,
  deleteBook,
  getSingleBook,
  updateBook}=require('../controllers')


const router = express.Router();

router.get("/", getBooks);

router.get("/:id", getSingleBook);

router.post("/", addBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
