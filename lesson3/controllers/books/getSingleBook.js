const Book = require("../../models/Books");

const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        code: 404,
        message: `Can not find with ID: ${req.params.id}`,
        data: book,
      });
    }
    return res.status(200).json({
      code: 200,
      message: `You Get correct Book`,
      data: book,
    });
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
    }); //важно
  }
};

module.exports = getSingleBook;
