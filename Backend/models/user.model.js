const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      // minlength: [3, "First name Must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      // minlength: [3, "Last name Must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // minlength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});



userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
  return token;
};

// userSchema.methods.comparepassword = async function (password) {
//   return await bcryptjs.compare(password, this.password);
// };

// userSchema.statics.hashpassword = async function (password) {
//   return await bcryptjs.hash(password, 10);
// };
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
