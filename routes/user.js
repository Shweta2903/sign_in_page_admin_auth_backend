const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await new User.find();
    res.status(200).json({
      users,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.post("/user", async (req, res) => {
  try {
    const { body } = req;
    console.log("req.body", body);
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("🚀 ~ router.post ~ newUser:", newUser);
    res.status(200).json({
      message: "User created successfully...",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
