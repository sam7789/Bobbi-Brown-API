const express = require("express");
const User = require("../models/UserModel");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/:id", authenticate, async (req, res) => {
  try {
    let user = await User.findById(req.user._id);
    await user.addToCart(req.params.id);
    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.post("/remove/:id", authenticate, async (req, res) => {
  try {
    let user = await User.findById(req.user._id);
    await user.removeCartItem(req.params.id);
    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send(err.message);
  }
});
router.post("/delete/:id", authenticate, async (req, res) => {
  try {
    let user = await User.findById(req.user._id);
    await user.deleteCartItem(req.params.id);
    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
