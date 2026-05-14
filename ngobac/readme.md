This is a stateless auth example 
server didn't store any state on it's memory if user want to access any resources it's need to send it's token the server will verify and give response according to it 

we need json-web-token for stateless auth

```js
const JWT_SECREAT = "navin5500";
    // 🛑STATELESS PART
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECREAT,
      { expiresIn: "1h" }
    )
 ```

 checking token through middleware 

 ```js 
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
```