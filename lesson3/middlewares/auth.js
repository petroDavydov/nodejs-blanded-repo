const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const [Bearer, token] = req.headers.authorization.split(" ");
  if (!token) {
    return res.status(403).json({ code: 403, message: "Token is required" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ code: 401, message: err.message });
  }
  return next();
};

module.exports = verifyToken;
