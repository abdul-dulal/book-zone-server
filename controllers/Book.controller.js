const { createBook, getBooks } = require("../services/Book.service");

exports.createBook = async (req, res, next) => {
  try {
    const result = await createBook(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};
exports.getAllbooks = async (req, res, next) => {
  try {
    const allBooks = await getBooks();
    res.status(200).json({
      status: "success",
      data: allBooks,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};
