const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const [Bearer, token] = req.headers.authorization.split(" ");

    if (!token) {
      return res.status(403).json({ code: 403, message: "Token is required" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
	  req.user = decoded;
	  next()
  } catch (err) {
    return res.status(401).json({ code: 401, message: 'User Not Authorizade' });
  }
};

module.exports = verifyToken;
