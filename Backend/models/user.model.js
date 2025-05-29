const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: 3,
      message: "First name should be at least 3 characters long",
    },
    lastname: {
      type: String,
      required: true,
      minLength: 3,
      message: "Last name should be at least 3 characters long",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    message: "Email must be a valid email address",
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
    default: null,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

//compare password method
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
