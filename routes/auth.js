const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  loginUser,
  signUpUser,
  getUserById,
  googleLogin,
} = require("../controllers/authController");
const { validateJwt, revalidateJwt } = require("../middlewares/processJwt");

router.get("/", getAllUsers);

router.get("/user/:id", getUserById);

router.post("/signup", signUpUser);

router.post("/login", loginUser);

router.post("/googleLogin", googleLogin)

router.post("/renew", validateJwt, revalidateJwt);

module.exports = router;
