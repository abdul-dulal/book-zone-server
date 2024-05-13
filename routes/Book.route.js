const router = require("express").Router();
const bookController = require("../controllers/Book.controller");

router.post("/", bookController.createBook);
router.get("/", bookController.getAllbooks);

module.exports = router;
