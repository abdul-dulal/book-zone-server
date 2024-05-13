const Book = require("../models/Book");

exports.createBook = async (data) => {
  const book = await Book.create(data);
  return book;
};

exports.getBooks = async () => {
  const book = await Book.find({});
  return book;
};
