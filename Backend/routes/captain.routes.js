const express= require('express');
const router = express();
const {body}= require('express-validator')
const captainController = require('../controllers/captain.controller');


router.post('/register',[
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("First name should be at least 3 characters long"),
    body("password").isLength({ min: 6 }).withMessage("Password should be at least 6 characters long"),
    body('vehicle.color').isLength({min:3}).withMessage("color must be at least 3 characters long"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate must be at least 3 characters long"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be at least 1"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid Vehicle")
  ],
  captainController.registerCaptain
)





module.exports= router;