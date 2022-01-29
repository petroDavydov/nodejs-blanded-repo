const express = require("express");
const AuthController = require("../controllers/authController");
const verifyToken = require("../middlewares/auth");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [check("email", "EV enter email").isEmail()],
  AuthController.register
);

router.post("/login", AuthController.login);

router.get("/logout", verifyToken, AuthController.logout);

module.exports = router;
