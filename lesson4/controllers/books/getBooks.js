const Book = require("../../models/Books");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      code: 200,
      message: `You Get all Books`,
      data: { books, count: books.length },
    });
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
    }); //важно
  }
};

module.exports = getBooks;
