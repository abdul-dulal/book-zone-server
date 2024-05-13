const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  prePrice: {
    type: String,
  },
  price: {
    type: String,
  },
  page: {
    type: String,
  },
  edition: {
    type: String,
  },
  review: {
    type: Array,
  },
  discount: {
    type: String,
  },
  publisher: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
