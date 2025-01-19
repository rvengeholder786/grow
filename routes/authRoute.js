const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  login,
  data,
} = require("../controllers/authController");

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", login);
router.post("/getData", data);

module.exports = router;
