const User = require('../models/user.model')

const jwt = require('jsonwebtoken')

const JWT_SECREAT = "navin5500";

const reqister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ mess: "please enter details" })
    }
    const isUserExists = await User.findOne({ email })
    if (isUserExists) {
      return res.status(405).json({ message: "User with this email already exists " })
    }
    const user = await User.create({ name, email, password })

    return res.status(200).json({ message: "Use register successfully " })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ mess: "internal server error" })

  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ mess: "Please enter all fields" })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ mess: "Invalid crediatels " })
    }

    const isValidPassword = await user.isPasswordCorrect(password)
    if (!isValidPassword) {
      return res.status(404).json({ mess: "Invalid crediatels " })
    }

    // 🛑STATELESS PART
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECREAT,
      { expiresIn: "1h" }
    )
    return res.status(200).json({ mess: "Login successfully ", token })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mess: "Internal server errror" })
  }
}
const logout = async (req, res) => {
  try {

  } catch (error) {

  }
}
const dashboard = async (req, res) => {
  try {
    return res.status(200).json({ mess: "Welcome to dashboard", userId: req.userId })
  } catch (error) {
    return res.status(500).json({ mess: "Internal server error", })

  }
}

module.exports = {
  reqister,
  login,
  logout,
  dashboard,
}