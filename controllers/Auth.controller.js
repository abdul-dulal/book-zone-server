const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function Register(req, res) {
  const { email, password } = req.body;

  try {
    const newUser = new User({
      email,
      password,
    });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        status: "failed",
        data: [],
        message: "It seems you already have an account, please log in instead.",
      });
    const savedUser = await newUser.save(); // save new user into the database
    const { ...user_data } = savedUser._doc;
    res.status(200).json({
      status: "success",
      data: [user_data],
      message:
        "Thank you for registering with us. Your account has been successfully created.",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: err.message,
    });
  }
  res.end();
}
async function Login(req, res) {
  // Get variables for the login process
  const { email } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(401).json({
        status: "failed",
        data: [],
        message:
          "Invalid email or password. Please try again with the correct credentials.",
      });
    // if user exists
    // validate password
    const isPasswordValid = bcrypt.compare(
      `${req.body.password}`,
      user.password
    );
    // if not valid, return unathorized response
    if (!isPasswordValid)
      return res.status(401).json({
        status: "failed",
        data: [],
        message:
          "Invalid email or password. Please try again with the correct credentials.",
      });
    // return user info except password

    if (isPasswordValid) {
      const token = jwt.sign(
        {
          email: user[0]?.email,
          userId: user[0]?._id,
        },
        "dulal",
        {
          expiresIn: "1h",
        }
      );
      console.log(token);

      res.send(token);
    } else {
      res.json({
        error: "fail",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: err.message,
    });
  }
  res.end();
}
module.exports = { Register, Login };
