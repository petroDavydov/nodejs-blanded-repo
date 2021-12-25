const Book = require("../../models/Books");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json({
      code: 201,
      message: `Book created`,
      data: newBook,
    });
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
    }); //важно
  }
};

module.exports = addBook;
