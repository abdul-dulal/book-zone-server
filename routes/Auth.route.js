const { Register, Login } = require("../controllers/Auth.controller");

const router = require("express").Router();
const check = require("express-validator");

// Register route -- POST request
router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
