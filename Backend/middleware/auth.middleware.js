const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.authuser = async (req, res, next) => {
  const tokan = req.cookies.token || req.headers.authorization?.split(" ")[1];
  console.log(tokan);
  if (!tokan) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBlacklisted = await BlacklistToken.findOne({ token: tokan });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(tokan, process.env.JWT_SECRET_KEY);
    // console.log(decoded);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
