const User = require("../modals/user");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (!name || !email || !password || password.length < 6 || exist) {
      return res.json({
        error: "missing details",
      });
    }
    const amount = "0";
    const user = await User.create({ name, email, password, amount });
    return res.json(user);
  } catch (error) {
    console.log("check");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && password == user.password) {
      return res.json(email);
    } else {
      return res.json("Error");
    }
  } catch (error) {
    console.log(error);
  }
};

const data = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ amount: user.amount, name: user.name });
    } else {
      return res.json({ error: "error" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  test,
  registerUser,
  login,
  data,
};
