const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/Auth.route");
const bookRouter = require("./routes/Book.route");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
