const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: 3,
      message: "First name should be at least 3 characters long",
    },
    lastname: {
      type: String,
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
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "color must be atleast 3 character"],
    },

    plate: {
      type: String,
      required: true,
      minLength: [3, "color must be atleast 3 character"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "capacity must be atleast 1 "],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
});

captainSchema.methods.generateAuthToke = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;
