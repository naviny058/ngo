const jwt = require('jsonwebtoken')
const JWT_SECREAT = "navin5500";

const checkHeader = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECREAT)
    req.userId = decoded.userId;
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = { checkHeader }