const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "captain already registered" });
  }

  const hashPassword = await captainModel.hashPassword(password);
  const captain = await captainService.createCaptain({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email: email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const token = await captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ captain, token });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistTokenModel.create({ token });

  res.clearCookie("token");
  res.status(200).json({ message: "Logout Successfully" });
};
