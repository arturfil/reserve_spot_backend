const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  loginUser,
  signUpUser,
  getUserById,
} = require("../controllers/authController");

router.get("/", getAllUsers);

router.get("/user/:id", getUserById);

router.post("/signup", signUpUser);

router.post("/login", loginUser);

module.exports = router;
